from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Document, UserProfile
from .serializers import (
    ContactRequestCreateSerializer,
    CurrentUserSerializer,
    DocumentSerializer,
)


@api_view(["GET"])
def health(request):
    return Response({"ok": True})


@api_view(["POST"])
def contact(request):
    serializer = ContactRequestCreateSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(source=(serializer.validated_data.get("source") or "web"))
    return Response({"ok": True}, status=status.HTTP_201_CREATED)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def current_user(request):
    serializer = CurrentUserSerializer(request.user)
    return Response(serializer.data)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def documents(request):
    user = request.user
    profile = user.userprofile

    if request.method == "GET":
        if profile.role == UserProfile.ROLE_ADMIN:
            qs = Document.objects.all().order_by("-created_at")
        else:
            qs = Document.objects.filter(assigned_to=user).order_by("-created_at")
        serializer = DocumentSerializer(qs, many=True, context={"request": request})
        return Response(serializer.data)

    # POST – only admins can create/send documents
    if profile.role != UserProfile.ROLE_ADMIN:
        return Response({"detail": "Only admins can create documents."}, status=403)

    title = request.data.get("title") or ""
    assigned_to_id = request.data.get("assigned_to")
    file_obj = request.FILES.get("file")

    if not title or not assigned_to_id or not file_obj:
        return Response(
            {"detail": "title, assigned_to, and file are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        from django.contrib.auth import get_user_model

        User = get_user_model()
        assigned_to = User.objects.get(pk=assigned_to_id)
    except Exception:
        return Response({"detail": "Invalid assigned_to user id."}, status=400)

    doc = Document.objects.create(
        title=title,
        file=file_obj,
        created_by=user,
        assigned_to=assigned_to,
    )
    serializer = DocumentSerializer(doc, context={"request": request})
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def sign_document(request, pk: int):
    user = request.user
    profile = user.userprofile
    try:
        doc = Document.objects.get(pk=pk)
    except Document.DoesNotExist:
        return Response({"detail": "Document not found."}, status=404)

    now = timezone.now()

    if profile.role == UserProfile.ROLE_ADMIN:
        doc.admin_signed_at = now
    elif profile.role == UserProfile.ROLE_CLIENT:
        if doc.assigned_to_id != user.id:
            return Response({"detail": "Not allowed to sign this document."}, status=403)
        doc.user_signed_at = now
    else:
        return Response({"detail": "Unknown role."}, status=403)

    if doc.admin_signed_at and doc.user_signed_at:
        doc.status = Document.STATUS_FULLY_SIGNED
    elif doc.admin_signed_at:
        doc.status = Document.STATUS_ADMIN_SIGNED

    doc.save(update_fields=["admin_signed_at", "user_signed_at", "status"])
    serializer = DocumentSerializer(doc, context={"request": request})
    return Response(serializer.data)

