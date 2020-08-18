from django.contrib import admin
from .models import Users, Keys, Reservations

# Register your models here.
admin.site.register(Users)
admin.site.register(Keys)
admin.site.register(Reservations)
