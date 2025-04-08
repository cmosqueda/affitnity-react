from django.urls import path
from .views import TargetView

# urls for targets
urlpatterns = [
    path('target/', TargetView.as_view(), name='user-target')
]
