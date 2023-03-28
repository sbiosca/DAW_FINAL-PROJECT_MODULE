from django.apps import AppConfig


class PartidosAppConfig(AppConfig):
    name = 'server.app.partidos'
    verbose_name = 'Partidos'

default_app_config = 'server.app.partidos.PartidosAppConfig'