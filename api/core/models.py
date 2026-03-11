from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class ContactRequest(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    source = models.CharField(max_length=50, blank=True)  # web / mobile / etc

    def __str__(self) -> str:
        return f"{self.name} <{self.email}>"


class UserProfile(models.Model):
    ROLE_CLIENT = "client"
    ROLE_ADMIN = "admin"

    ROLE_CHOICES = [
        (ROLE_CLIENT, "Client"),
        (ROLE_ADMIN, "Admin"),
    ]

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default=ROLE_CLIENT)

    def __str__(self) -> str:
        return f"{self.user.get_username()} ({self.role})"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


class Document(models.Model):
    STATUS_PENDING = "pending"
    STATUS_ADMIN_SIGNED = "admin_signed"
    STATUS_FULLY_SIGNED = "fully_signed"

    STATUS_CHOICES = [
        (STATUS_PENDING, "Pending"),
        (STATUS_ADMIN_SIGNED, "Signed by admin"),
        (STATUS_FULLY_SIGNED, "Signed by admin and client"),
    ]

    title = models.CharField(max_length=255)
    file = models.FileField(upload_to="documents/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="created_documents",
    )
    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="assigned_documents",
    )

    admin_signed_at = models.DateTimeField(null=True, blank=True)
    user_signed_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING
    )

    def __str__(self) -> str:
        return f"{self.title} ({self.status})"

