from django.urls import path
from .views import ExercisePlanView, DietPlanView

urlpatterns = [
    path("exercise/", ExercisePlanView.as_view()),
    path("exercise/generate/", ExercisePlanView.as_view(generate_ai=True)),
    path("diet/", DietPlanView.as_view()),
    path("diet/generate/", DietPlanView.as_view(generate_ai=True)),
]
