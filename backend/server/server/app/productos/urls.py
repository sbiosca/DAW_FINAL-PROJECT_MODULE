from django.urls import path
from .views import ProductosView

urlpatterns = [
    path('', ProductosView.as_view({'get': 'GetProductos'})),
    path('_productsFiltered', ProductosView.as_view({'get': 'GetProductosFiltered'})),
]