from django.db import models
from targets.models import Target

# Create your models here.

# USING FACTORY MODEL -> DRY principle

# base plan
class BasePlan(models.Model):
    target = models.ForeignKey(Target, on_delete=models.CASCADE)
    plan_data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.__class__.__name__} for {self.target.profile.user.username} at {self.created_at}"


# Exercise Plan Model extends from Base Plan
class ExercisePlan(BasePlan):
    class Meta:
        verbose_name = "Exercise Plan"
        verbose_name_plural = "Exercise Plans"

# Diet Plan Model extends from Base Plan
class DietPlan(BasePlan):
    class Meta:
        verbose_name = "Diet Plan"
        verbose_name_plural = "Diet Plans"