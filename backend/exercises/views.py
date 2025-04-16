# exercises/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django.core.paginator import Paginator

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
        
        # Pagination
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        # If no pagination, return full list
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def search_exercises(request):
    query = request.GET.get('q', '')
    exercises = Exercise.objects.filter(name__icontains=query)
    serializer = ExerciseSerializer(exercises, many=True)
    return Response(serializer.data)
