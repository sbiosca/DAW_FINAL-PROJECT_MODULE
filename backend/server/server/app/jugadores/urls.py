from django.urls import path
from .views import JugadoresView

urlpatterns = [
    path('', JugadoresView.as_view({'get': 'GetJugadores'})),
]