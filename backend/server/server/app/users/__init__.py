from django.apps import AppConfig


class UsersAppConfig(AppConfig):
    name = 'server.app.users'
    verbose_name = 'Users'

default_app_config = 'server.app.users.UsersAppConfig'