from django.urls import path
from .views import SociosView

urlpatterns = [
    path('', SociosView.as_view({'get': 'GetSocios'})),
]