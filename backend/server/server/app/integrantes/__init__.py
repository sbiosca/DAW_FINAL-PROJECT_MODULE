from django.apps import AppConfig


class IntegrantesAppConfig(AppConfig):
    name = 'server.app.integrantes'
    verbose_name = 'Integrantes'

default_app_config = 'server.app.integrantes.IntegrantesAppConfig'