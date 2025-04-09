from django.urls import path
from .views import ExercisePlanView, DietPlanView

urlpatterns = [
    # Exercise Plan endpoints
    path('exercise-plan/', ExercisePlanView.as_view(), name='user-exercise-plan'),
    path('exercise-plan/<int:pk>/', ExercisePlanView.as_view(), name='user-exercise-plan-detail'),

    # Diet Plan endpoints
    path('diet-plan/', DietPlanView.as_view(), name='user-diet-plan'),
    path('diet-plan/<int:pk>/', DietPlanView.as_view(), name='user-diet-plan-detail'),
]
