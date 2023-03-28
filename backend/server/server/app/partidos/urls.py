from django.urls import path
from .views import EquipoView

urlpatterns = [
    path('', EquipoView.as_view({'get': 'GetEquipo'})),
]