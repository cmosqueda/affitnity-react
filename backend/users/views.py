import json
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .models import Profile

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, ProfileSerializer, CustomTokenObtainPairSerializer 

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from rest_framework.decorators import api_view, permission_classes




# Create your views here.

# using serializer

# jwt register view
class RegisterUserView(APIView):
    def post(self, request):
        try:
            serializer = RegisterSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=500)


# custom login view
class CustomLoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer



# update profile
class UpdateProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profile updated successfully!"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# test views
class TestPostView(APIView):
    def post(self, request):
        test_text = request.data.get("testText")
        if not test_text:
            return Response({"error": "testText is required."}, status=400)
        return Response({"message": "Received data successfully.", "testText": test_text})


class GetProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

# validate token
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def validate_token(request):
    return Response({
        "message": "Token is valid",
        "user": {
            "id": request.user.id,
            "username": request.user.username,
            "email": request.user.email,
            "first_name": request.user.first_name,
            "last_name": request.user.last_name,
        }
    })

