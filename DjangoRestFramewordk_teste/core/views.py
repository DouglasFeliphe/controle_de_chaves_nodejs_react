from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UsersSerializer, KeysSerializer, ReservationsSerializer
from .models import Users, Keys, Reservations

# Create your views here.


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class KeysViewSet(viewsets.ModelViewSet):
    queryset = Keys.objects.all()
    serializer_class = KeysSerializer


class ReservationsViewSet(viewsets.ModelViewSet):
    queryset = Reservations.objects.all()
    serializer_class = ReservationsSerializer