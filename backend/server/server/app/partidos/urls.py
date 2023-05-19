from django.urls import path
from .views import PartidosView

urlpatterns = [
    path('', PartidosView.as_view({'get': 'GetPartidos'})),
    path('/one_<int:id>', PartidosView.as_view({'get': 'getOnePartido'})),
    path('/<int:id>', PartidosView.as_view({'get': 'GetPartidosbyCompeti'})),
    path('_add', PartidosView.as_view({'post': 'CreatePartidos'})),
    path('_update/<int:id>', PartidosView.as_view({'put': 'putPartidos'})),
    path('_delete/<int:id>', PartidosView.as_view({'delete': 'DeletePartidos'})),
]