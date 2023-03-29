from django.apps import AppConfig


class TecnicosAppConfig(AppConfig):
    name = 'server.app.tecnicos'
    verbose_name = 'Tecnicos'

default_app_config = 'server.app.tecnicos.TecnicosAppConfig'