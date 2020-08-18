from rest_framework import serializers
from .models import Users, Keys, Reservations


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['registration_number', 'name']


class KeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keys
        fields = ['number', 'name']


class ReservationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservations
        fields = ['id', 'date', 'user_name', 'key_name', 'key_number','delivered_at','returned_at']
