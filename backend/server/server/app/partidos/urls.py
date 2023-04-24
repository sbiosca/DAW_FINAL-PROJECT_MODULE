from django.urls import path
from .views import PartidosView

urlpatterns = [
    path('', PartidosView.as_view({'get': 'GetPartidos'})),
    path('/<int:id>', PartidosView.as_view({'get': 'GetPartidosbyCompeti'})),
]