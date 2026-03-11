from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import ContactRequest, Document, UserProfile


class ContactRequestCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = ("name", "email", "company", "message", "source")


User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ("role",)


class CurrentUserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(source="userprofile")

    class Meta:
        model = User
        fields = ("id", "username", "email", "is_staff", "is_superuser", "profile")


class DocumentSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)
    assigned_to = serializers.StringRelatedField(read_only=True)
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = (
            "id",
            "title",
            "file",
            "file_url",
            "created_at",
            "updated_at",
            "created_by",
            "assigned_to",
            "admin_signed_at",
            "user_signed_at",
            "status",
        )
        read_only_fields = (
            "created_at",
            "updated_at",
            "created_by",
            "admin_signed_at",
            "user_signed_at",
            "status",
        )

    def get_file_url(self, obj: Document) -> str | None:
        request = self.context.get("request")
        if not obj.file:
            return None
        url = obj.file.url
        if request is not None:
            return request.build_absolute_uri(url)
        return url

