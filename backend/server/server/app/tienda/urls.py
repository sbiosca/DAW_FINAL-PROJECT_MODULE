from django.urls import path
from .views import TiendaView

urlpatterns = [
    path('', TiendaView.as_view({'get': 'GetTienda'})),
    path('_addShop', TiendaView.as_view({'post': 'AddTienda'})),
    path('_putShop/<int:id>', TiendaView.as_view({'put': 'UpdateTienda'})),
    path('_deleteShop/<int:id>', TiendaView.as_view({'delete': 'DeleteTienda'})),
]