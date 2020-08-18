from django.db import models

# Create your models here.


class Users(models.Model):
    registration_number = models.IntegerField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Keys(models.Model):
    number = models.IntegerField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Reservations(models.Model):
    date = models.CharField(max_length=50)
    user_name = models.CharField(max_length=50)
    key_name = models.CharField(max_length=50)
    key_number = models.IntegerField()
    delivered_at = models.CharField(max_length=50)
    returned_at = models.CharField(max_length=50)

    def __str__(self):
        return self.date