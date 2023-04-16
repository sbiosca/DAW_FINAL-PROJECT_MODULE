from django.urls import path
from .views import UsersView

urlpatterns = [
    path('', UsersView.as_view({'get': 'GetUsers'})),
    path('_login', UsersView.as_view({'post': 'Login'})),
    path('_register', UsersView.as_view({'post': 'Register'})),
    path('_profile/<int:id>', UsersView.as_view({'get': 'getInforUser'})),
]