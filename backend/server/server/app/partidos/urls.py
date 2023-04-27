from django.urls import path
from .views import PartidosView

urlpatterns = [
    path('', PartidosView.as_view({'get': 'GetPartidos'})),
    path('/one_<int:id>', PartidosView.as_view({'get': 'getOnePartido'})),
    path('/<int:id>', PartidosView.as_view({'get': 'GetPartidosbyCompeti'})),
]