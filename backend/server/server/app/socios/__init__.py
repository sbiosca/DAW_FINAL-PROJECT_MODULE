from django.apps import AppConfig


class SociosAppConfig(AppConfig):
    name = 'server.app.socios'
    verbose_name = 'Socios'

default_app_config = 'server.app.socios.SociosAppConfig'