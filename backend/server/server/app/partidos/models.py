from django.db import models

class Partidos(models.Model):
    class Meta:
        db_table = "partidos"
    competi = models.IntegerField('id_competi')
    eq1 = models.CharField('eq1',max_length=100)
    eq2 = models.CharField('eq2',max_length=100)
    horario = models.DateTimeField('horario')
    resultado = models.CharField('resultado',max_length=20)
    img_partidos = models.CharField('img_partidos',max_length=1000 )

    def __str__(self):
        return str(self.id)