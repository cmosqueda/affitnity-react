from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)

    # gender choices
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES,null=True,blank=True)

    # weight -> kilograms
    # height  -> centimeter

    weight = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)
    height = models.DecimalField(max_digits=5, decimal_places=2,null=True, blank=True)
    bmi = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)

    BODY_TYPE_CHOICES = [
        ('ectomorph', 'Ectomorph'),
        ('mesomorph', 'Mesomorph'),
        ('endomorph', 'Endomorph'),        
    ]
    body_type = models.CharField(max_length=20, choices=BODY_TYPE_CHOICES, null=True, blank=True)

    def save(self,*args, **kwargs):
        """Auto-calculate BMI before saving"""
        if self.weight and self.height:
            self.bmi = round(self.weight / ((self.height / 100) ** 2), 2)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username}"        


