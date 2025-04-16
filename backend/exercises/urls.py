from django.urls import path
from . import views

urlpatterns = [
    path('exercises/',views.ExerciseListView.as_view(), name='exercise-list'),
    path('exercises/search/', views.search_exercises, name='exercise-search'),
]