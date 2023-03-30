from django.db import models
from server.app.socios.models import Socios

class Profile(models.Model):
    class Meta:
        db_table = "profile"
    socio = models.ForeignKey(Socios, related_name='id_socio',on_delete=models.DO_NOTHING)
    correo = models.CharField('correo',max_length=50)
    name_complet = models.CharField('name_complet',max_length=100)
    addres = models.CharField('addres',max_length=100)
    num_telf = models.CharField('num_telf',max_length=9)
    avatar = models.CharField('avatar',max_length=50)    
    type = models.CharField('type',max_length=50)

    def __str__(self):
        return str(self.id)