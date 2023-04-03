from django.urls import path
from .views import UsersView

urlpatterns = [
    path('', UsersView.as_view({'get': 'GetUsers'})),
    path('_register', UsersView.as_view({'post': 'Register'})),
]