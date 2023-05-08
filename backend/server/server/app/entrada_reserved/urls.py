from django.urls import path
from .views import Entrada_reservedView

urlpatterns = [
    path('', Entrada_reservedView.as_view({'get': 'GetEntrada_reserved'})),
    path('/<int:id>', Entrada_reservedView.as_view({'get': 'GetEntrada_reserved_User'})),
    path('_buy', Entrada_reservedView.as_view({'post': 'BuyEntrada'})),
    path('_delete/<int:id>', Entrada_reservedView.as_view({'delete': 'CancelEntrada'})),
]