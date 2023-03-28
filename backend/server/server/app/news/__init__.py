from django.apps import AppConfig


class NewsAppConfig(AppConfig):
    name = 'server.app.news'
    verbose_name = 'News'

default_app_config = 'server.app.news.NewsAppConfig'