from django.apps import AppConfig

class EquipoAppConfig(AppConfig):
    name = 'server.app.equipo'
    verbose_name = 'Equipo'

default_app_config = 'server.app.equipo.EquipoAppConfig'