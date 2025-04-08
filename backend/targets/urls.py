from django.urls import path
from .views import TargetView

urlpatterns = [
    path('target/', TargetView.as_view(), name='user-target')
]
