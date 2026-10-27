from django.db import models

class Register(models.Model):
    username = models.CharField(max_length=200, unique=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    dob = models.DateField()
    GENDER_CHOICES = [("male", "Male"), ("female", "Female"), ("others", "Others")]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    password = models.CharField(max_length=50)