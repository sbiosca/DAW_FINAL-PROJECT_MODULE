from django.urls import path
from .views import ProductosView

urlpatterns = [
    path('', ProductosView.as_view({'get': 'GetProductos'})),
]