from django.urls import path
from .views import EntradasView

urlpatterns = [
    path('', EntradasView.as_view({'get': 'GetEntradas'})),
]