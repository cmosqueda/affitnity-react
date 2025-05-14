from django.db import models
from django.contrib.postgres.fields import ArrayField
from users.models import Profile

# Create your models here.

# fitness target
class Target(models.Model):
    EXPERIENCE_LEVEL_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
    ]


    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='targets')
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVEL_CHOICES)

    # FITNESS
    # outcome oriented -> ex. weight loss, build muscle, gain stamina, etc.
    fitness_goals = ArrayField(models.CharField(max_length=50, null=True, blank=True), blank=True, default=list)

    # activity oriented ->  ex. cardio, flexibility, HIIT, strength, yoga, aerobics, etc.
    fitness_focus = ArrayField(models.CharField(max_length=50, null=True, blank=True), blank=True, default=list)

    # DIET
    # diet goals
    preferred_diet = ArrayField(models.CharField(max_length=50, null=True, blank=True), blank=True, default=list)

    # diet_restrictions => allergies, restrictions
    diet_restrictions = ArrayField(models.CharField(max_length=50, null=True, blank=True), blank=True, default=list)


    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"Target for {self.profile.user.username} ({self.experience_level})"