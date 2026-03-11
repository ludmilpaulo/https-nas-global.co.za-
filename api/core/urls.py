from django.urls import path

from . import views

urlpatterns = [
    path("health/", views.health, name="health"),
    path("contact/", views.contact, name="contact"),
    path("me/", views.current_user, name="current_user"),
    path("documents/", views.documents, name="documents"),
    path("documents/<int:pk>/sign/", views.sign_document, name="sign_document"),
]

