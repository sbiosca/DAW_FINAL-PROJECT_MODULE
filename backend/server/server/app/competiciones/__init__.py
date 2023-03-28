from django.apps import AppConfig


class CompeticionesAppConfig(AppConfig):
    name = 'server.app.competiciones'
    verbose_name = 'Competiciones'

default_app_config = 'server.app.competiciones.CompeticionesAppConfig'