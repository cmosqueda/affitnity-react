from rest_framework import serializers
from .models import ExercisePlan, DietPlan

# base plan
class BasePlanSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
        abstract = True  # just to be clear that this is a base class

# exercise plan serializer
class ExercisePlanSerializer(BasePlanSerializer):
    class Meta(BasePlanSerializer.Meta):
        model = ExercisePlan


# diet plan serializer
class DietPlanSerializer(BasePlanSerializer):
    class Meta(BasePlanSerializer.Meta):
        model = DietPlan