from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import TestPostView, RegisterUserView, CustomLoginView, UpdateProfileView, GetProfileView, validate_token
from rest_framework_simplejwt.views import TokenRefreshView

# OLD URL PATTERNS
# urlpatterns = [
#     path('test-get/', test_get_request),
#     path('test-post/', test_post_request),
#     path('login/', login_user),
#     path('register/', register_user),
#     path('update-profile/', update_profile),
#     path('logout/',logout_user)
# ]


# NEW URL PATTERNS
urlpatterns = [
    # path('test-get/', test_get_request),
    path('test-post/', TestPostView.as_view()),

    # Auth routes
    path('register/', RegisterUserView.as_view(), name='register'),

    # login
    path('login/', CustomLoginView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('update-profile/', UpdateProfileView.as_view(), name='update_profile'),
    path('get-profile/', GetProfileView.as_view(), name='get_profile'),
    path('validate-token/', validate_token, name='validate_token'),

    # Optional logout if using Django session logout
    # path('logout/', logout_user, name='logout'),  # Can also remove this if going full JWT
]