from django.db import models
from server.app.core.models import TimestampedModel

class Socios(models.Model):
    class Meta:
        managed = False
        db_table = "socios"
    num_socio = models.IntegerField('num_socio')

    def __str__(self):
        return str(self.id)