from django.db import models
from server.app.partidos.models import Partidos

class Entrada(models.Model):
    class Meta:
        managed = False
        db_table = "equipo"
    partido = models.ForeignKey(Partidos,related_name='id_partido',on_delete=models.DO_NOTHING)
    asiento = models.IntegerField('asiento')
    graderia = models.CharField('graderia',max_length=100)
    fila = models.IntegerField('fila')
    precio = models.DecimalField('precio', max_digits=100)
    disponible = models.BooleanField('disponible')

    def __str__(self):
        return str(self.id)