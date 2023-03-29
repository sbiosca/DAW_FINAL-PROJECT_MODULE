from django.db import models
from server.app.core.models import TimestampedModel

class Tecnicos(models.Model):
    class Meta:
        managed = False
        db_table = "tecnicos"
    type = models.CharField('type',max_length=20)

    def __str__(self):
        return str(self.id)