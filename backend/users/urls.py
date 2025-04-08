from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import test_get_request, test_post_request, register_user, login_user, update_profile, logout_user

# urls for users
urlpatterns = [
    path('test-get/', test_get_request),
    path('test-post/', test_post_request),
    path('login/', login_user),
    path('register/', register_user),
    path('update-profile/', update_profile),
    path('logout/',logout_user)
]

