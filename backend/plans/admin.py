from django.contrib import admin
from .models import ExercisePlan, DietPlan

# Register your models here.
admin.site.register(ExercisePlan)
admin.site.register(DietPlan)