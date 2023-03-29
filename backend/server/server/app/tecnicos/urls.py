from django.urls import path
from .views import TecnicosView

urlpatterns = [
    path('', TecnicosView.as_view({'get': 'GetTecnicos'})),
]