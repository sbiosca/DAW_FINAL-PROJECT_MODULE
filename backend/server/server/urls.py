"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('server/equipo', include('server.app.equipo.urls')),
    path('server/competiciones', include('server.app.competiciones.urls')),
    path('server/entrada_reserved', include('server.app.entrada_reserved.urls')),
    path('server/entradas', include('server.app.entradas.urls')),
    path('server/integrantes', include('server.app.integrantes.urls')),
    path('server/jugadores', include('server.app.jugadores.urls')),
    path('server/news', include('server.app.news.urls')),
    path('server/partidos', include('server.app.partidos.urls')),
    path('server/productos', include('server.app.productos.urls')),
    path('server/profile', include('server.app.profile.urls')),
    path('server/socios', include('server.app.socios.urls')),
    path('server/tecnicos', include('server.app.tecnicos.urls')),
    path('server/tienda', include('server.app.tienda.urls')),
    path('server/users', include('server.app.users.urls')),

]


