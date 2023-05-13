from django.urls import path
from .views import EntradasView

urlpatterns = [
    path('', EntradasView.as_view({'get': 'GetEntradas'})),
    path('/<int:id>', EntradasView.as_view({'get': 'GetEntradasbyPartidos'})),
    path('_add', EntradasView.as_view({'post': 'CreateEntrada'})),
    path('/update/<int:id>', EntradasView.as_view({'put': 'putEntrada'})),
]