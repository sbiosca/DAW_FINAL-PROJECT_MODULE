from django.urls import path
from .views import IntegrantesView

urlpatterns = [
    path('', IntegrantesView.as_view({'get': 'GetIntegrantes'})),
    path('/update/<int:id>', IntegrantesView.as_view({'put': 'putIntegrante'})),
]