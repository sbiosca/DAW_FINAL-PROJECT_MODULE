from django.apps import AppConfig


class TiendaAppConfig(AppConfig):
    name = 'server.app.tienda'
    verbose_name = 'Tienda'

default_app_config = 'server.app.tienda.TiendaAppConfig'