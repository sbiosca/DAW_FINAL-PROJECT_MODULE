from django.db import models
from server.app.partidos.models import Partidos

class Entrada(models.Model):
    class Meta:
        db_table = "entradas"
    partido = models.ForeignKey(Partidos,related_name='partido_id',on_delete=models.DO_NOTHING)
    asiento = models.IntegerField('asiento')
    graderia = models.CharField('graderia',max_length=100)
    fila = models.IntegerField('fila')
    precio = models.IntegerField('precio')
    disponible = models.BooleanField('disponible')

    def __str__(self):
        return str(self.id)