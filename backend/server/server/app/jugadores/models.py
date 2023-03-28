from django.db import models

class Jugadores(models.Model):
    class Meta:
        managed = False
        db_table = "jugadores"
    dorsal = models.IntegerField('dorsal')
    goles = models.IntegerField('goles')
    tarjetas_amar = models.IntegerField('tarjetas_amar')
    tarjetas_roj = models.IntegerField('tarjetas_roj')
    lesionado = models.BooleanField('lesionado')

    def __str__(self):
        return str(self.id)