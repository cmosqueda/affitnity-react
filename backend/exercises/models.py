from django.db import models

# Create your models here.

# Exercise db data  store in django
class Exercise(models.Model):
    id = models.AutoField(primary_key=True)
    exercise_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    gif_url = models.URLField()
    target_muscles = models.JSONField()
    body_parts = models.JSONField()
    equipments = models.JSONField()

    def __str__(self):
        return self.name