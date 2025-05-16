from google import genai  # Assuming this is your Gemini client
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ExercisePlan, DietPlan
from .serializers import DietPlanSerializer, ExercisePlanSerializer
from ai.prompt_builders import build_diet_prompt, build_exercise_prompt
from .models import Target
import json




class BasePlanView(APIView):
    permission_classes = [IsAuthenticated]
    model = None
    serializer_class = None
    prompt_builder = None

    def get_target_queryset(self, user):
        return Target.objects.filter(profile__user=user)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        targets = self.get_target_queryset(request.user)
        plans = self.model.objects.filter(target__in=targets)
        serializer = self.serializer_class(plans, many=True)
        return Response(serializer.data)

    def generate_ai_plan(self, request):
        targets = self.get_target_queryset(request.user)
        if not targets.exists():
            return Response({"error": "Target not found"}, status=404)

        target = targets.first()  # Or decide which target to use

        if not self.prompt_builder:
            return Response({"error": "No prompt builder provided."}, status=500)

        prompt = self.prompt_builder(target)

        # Call Gemini AI here
        try:
            client = genai.Client(api_key="AIzaSyDhvI0q9p5jRc_-WEaBrwGMnBjHToI_-S8")  # Adjust if you need API key, e.g. genai.Client(api_key=...)
            response = client.chat.completions.create(
                model="gemini-1",
                messages=[{"role": "user", "content": prompt}]
            )
            ai_response = response.choices[0].message.content
        except Exception as e:
            return Response({"error": f"AI generation failed: {str(e)}"}, status=500)

        # Parse AI response as JSON
        try:
            plan_json = json.loads(ai_response)
        except json.JSONDecodeError:
            return Response({"error": "Invalid JSON response from AI."}, status=500)

        # Save to DB
        plan = self.model.objects.create(target=target, plan_data=plan_json)
        serializer = self.serializer_class(plan)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

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

    @classmethod
    def as_view(cls, **initkwargs):
        generate_ai = initkwargs.pop("generate_ai", False)
        view = super().as_view(**initkwargs)
        if generate_ai:
            return BasePlanView._generate_ai_wrapper(view)
        return view
    
    @staticmethod
    def _generate_ai_wrapper(view_func):
        def wrapper(request, *args, **kwargs):
            self = BasePlanView()
            self.request = self.initialize_request(request, *args, **kwargs)
            self.check_permissions(self.request)
            return self.generate_ai_plan(self.request)
        return wrapper

    
    




class ExercisePlanView(BasePlanView):
    model = ExercisePlan
    serializer_class = ExercisePlanSerializer
    prompt_builder = build_exercise_prompt


class DietPlanView(BasePlanView):
    model = DietPlan
    serializer_class = DietPlanSerializer
    prompt_builder = build_diet_prompt


class ExercisePlanGenerateView(ExercisePlanView):
    def post(self, request):
        return self.generate_ai_plan(request)
    

class DietPlanGenerateView(DietPlanView):
    def post(self, request):
        return self.generate_ai_plan(request)