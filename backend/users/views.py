import json
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
# from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .models import Profile
# from .serializers import UserSerializer, ProfileSerializer

# Create your views here.

# not using serializer

# profile view

# test get request
def test_get_request(request):
    return HttpResponse('<h1>Hello po, test lang i2.</h1>')

# test post request
@csrf_exempt
def test_post_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            test_text = data.get("testText")

            if not test_text:
                return JsonResponse({"error":"testText is required."}, status=400)
            
            return JsonResponse({
                "message":"Received data successfully.",
                "testText": test_text
            })
        except json.JSONDecodeError:
            return JsonResponse({"error":"Invalid JSON format."}, status=400)
        
    return JsonResponse({"error": "Invalid request method."}, status=400)

# user registration
@csrf_exempt
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already taken"}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Email already in use"}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return JsonResponse({"message": "User registered successfully!"})
    
    return JsonResponse({"error": "Invalid request method"}, status=400)

# user login
@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({"message": "Login successful!"})
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=400)

# logout user
def logout_user(request):
    logout(request)
    return JsonResponse({"message": "User logged out successfully!"})

# update profile
@csrf_exempt
def update_profile(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "User not authenticated"}, status=403)

    if request.method == "POST":
        data = json.loads(request.body)
        profile = Profile.objects.get(user=request.user)

        profile.birth_date = data.get("birth_date", profile.birth_date)
        profile.gender = data.get("gender", profile.gender)
        profile.weight = data.get("weight", profile.weight)
        profile.height = data.get("height", profile.height)
        profile.body_type = data.get("body_type", profile.body_type)
        # profile.experience_level = data.get("experience_level", profile.experience_level)

        profile.save()
        return JsonResponse({"message": "Profile updated successfully!"})

    return JsonResponse({"error": "Invalid request method"}, status=400)