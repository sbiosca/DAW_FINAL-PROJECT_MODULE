from django.apps import AppConfig


class JugadoresAppConfig(AppConfig):
    name = 'server.app.jugadores'
    verbose_name = 'Jugadores'

default_app_config = 'server.app.jugadores.JugadoresAppConfig'