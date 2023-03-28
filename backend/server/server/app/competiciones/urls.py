from django.urls import path
from .views import CompeticionesView

urlpatterns = [
    path('', CompeticionesView.as_view({'get': 'GetCompeticiones'})),
]