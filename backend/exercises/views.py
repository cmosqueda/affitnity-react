# exercises/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter

from .models import Exercise
from .serializers import ExerciseSerializer

class ExerciseListView(ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    pagination_class = None  # we will handle pagination manually

    filter_backends = [SearchFilter]
    search_fields = ['name', 'target_muscles', 'body_parts', 'equipments']  # fields to search on

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        # Manual pagination using offset and limit
        try:
            offset = int(request.GET.get('offset', 0))
            limit = int(request.GET.get('limit', 10))
        except ValueError:
            return Response({"error": "Invalid offset or limit"}, status=status.HTTP_400_BAD_REQUEST)

        total_count = queryset.count()
        paginated_queryset = queryset[offset:offset + limit]
        serializer = self.get_serializer(paginated_queryset, many=True)

        return Response({
            "count": total_count,
            "offset": offset,
            "limit": limit,
            "data": {
                "exercises": serializer.data
            }
        })


@api_view(['GET'])
def search_exercises(request):
    query = request.GET.get('q', '')
    exercises = Exercise.objects.filter(name__icontains=query)
    serializer = ExerciseSerializer(exercises, many=True)

    return Response({
        "count": exercises.count(),
        "offset": 0,
        "limit": exercises.count(),
        "data": {
            "exercises": serializer.data
        }
    })