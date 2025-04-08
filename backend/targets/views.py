# from django.shortcuts import render, redirect
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Target
from .serializers import TargetSerializer
from users.models import Profile

# Create your views here.

# using serializer
class TargetView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_profile(self, user):
        return Profile.objects.get(user=user)
    
    def get(self, request):
        """Retrieve target data for the authenticated user"""
        profile = self.get_profile(request.user)
        try:
            target = Target.objects.get(profile=profile)
            serializer = TargetSerializer(target)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Target.DoesNotExist:
            return Response({"error": "Target not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request):
        """Create a new Target for authenticated user"""
        profile = self.get_profile(request.user)
        serializer = TargetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(profile=profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request):
        """Update existing Target for authenticated user"""
        profile = self.get_profile(request.user)
        try:
            target = Target.objects.get(profile=profile)
        except Target.DoesNotExist:
            return Response({"error":"Target not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = TargetSerializer(target, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        """Clear / delete the user's Target"""
        profile = self.get_profile(request.user)
        try:
            target = Target.objects.get(profile=profile)
            target.delete()
            return Response({"message":"Target deleted"}, status=status.HTTP_204_NO_CONTENT)
        except Target.DoesNotExist:
            return Response({"error":"Target not found"}, status=status.HTTP_404_NOT_FOUND)
        
