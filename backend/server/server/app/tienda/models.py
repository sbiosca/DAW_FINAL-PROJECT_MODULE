from django.db import models
from server.app.core.models import TimestampedModel

class Tienda(models.Model):
    class Meta:
        managed = False
        db_table = "tienda"
    name = models.CharField('name',max_length=100)
    lat = models.CharField('lat',max_length=50)
    long = models.CharField('long',max_length=50)
    img = models.CharField('img',max_length=50)

    def __str__(self):
        return str(self.id)