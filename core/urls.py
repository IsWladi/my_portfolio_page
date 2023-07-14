from django.urls import path
from .views import index, save_language

urlpatterns = [
    path('', index, name='index'),
    path('save_language/', save_language, name='save_language'),
]
