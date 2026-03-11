from django.contrib import admin

from .models import ContactRequest, Document, UserProfile


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ("created_at", "name", "email", "company", "source")
    list_filter = ("source", "created_at")
    search_fields = ("name", "email", "company", "message")


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "role")
    list_filter = ("role",)
    search_fields = ("user__username", "user__email")


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "created_by",
        "assigned_to",
        "status",
        "created_at",
        "admin_signed_at",
        "user_signed_at",
    )
    list_filter = ("status", "created_at")
    search_fields = ("title", "created_by__username", "assigned_to__username")

from django.contrib import admin

# Register your models here.
