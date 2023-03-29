from django.db import models
from server.app.jugadores.models import Jugadores
from server.app.tecnicos.models import Tecnicos

class Integrantes(models.Model):
    class Meta:
        db_table = "integrantes"
    player = models.ForeignKey(Jugadores,related_name="id_player",on_delete=models.DO_NOTHING)
    tecnico = models.ForeignKey(Tecnicos,related_name="id_tecn",on_delete=models.DO_NOTHING)
    name = models.CharField('name',max_length=50)
    apellidos = models.CharField('apellidos',max_length=50)
    nacionalidad = models.CharField('nacionalidad',max_length=50)
    fech_naci = models.DateField('fech_naci')
    avatar = models.CharField('avatar', max_length=100)

    def __str__(self):
        return str(self.id)