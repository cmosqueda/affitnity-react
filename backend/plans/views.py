from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import ExercisePlan, DietPlan
from .serializers import ExercisePlanSerializer, DietPlanSerializer
from targets.models import Target

# Create your views here.

class BasePlanView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    model = None  # To be defined in subclass
    serializer_class = None  # To be defined in subclass
    related_name = None  # Optional: to customize related_name

    def get_target_queryset(self, user):
        return Target.objects.filter(profile__user=user)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        targets = Target.objects.filter(profile__user=request.user)
        plans = self.model.objects.filter(target__in=targets)
        serializer = self.serializer_class(plans, many=True)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            plan = self.model.objects.get(pk=pk, target__profile__user=request.user)
        except self.model.DoesNotExist:
            return Response({"error": f"{self.model.__name__} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(plan, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        try:
            plan = self.model.objects.get(pk=pk, target__profile__user=request.user)
        except self.model.DoesNotExist:
            return Response({"error": f"{self.model.__name__} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(plan, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            plan = self.model.objects.get(pk=pk, target__profile__user=request.user)
            plan.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except self.model.DoesNotExist:
            return Response({"error": f"{self.model.__name__} not found"}, status=status.HTTP_404_NOT_FOUND)
        

# exercise plan view
class ExercisePlanView(BasePlanView):
    model = ExercisePlan
    serializer_class = ExercisePlanSerializer

# diet plan view
class DietPlanView(BasePlanView):
    model = DietPlan
    serializer_class = DietPlanSerializer
    
# basilan ko ni