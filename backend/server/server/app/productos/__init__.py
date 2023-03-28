from django.apps import AppConfig


class ProductosAppConfig(AppConfig):
    name = 'server.app.productos'
    verbose_name = 'Productos'

default_app_config = 'server.app.productos.ProductosAppConfig'