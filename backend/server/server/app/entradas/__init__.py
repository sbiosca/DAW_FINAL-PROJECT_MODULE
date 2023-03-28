from django.apps import AppConfig

class EntradasAppConfig(AppConfig):
    name = 'server.app.entradas'
    verbose_name = 'Entradas'

default_app_config = 'server.app.entradas.EntradasAppConfig'