from django.shortcuts import render

# Create your views here.
from django.contrib.postgres.search import TrigramSimilarity
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise

# api view here