from django.db import models
from server.app.entradas.models import Entrada
from server.app.users.models import Users
class Entrada_reserved(models.Model):
    class Meta:
        managed = False
        db_table = "entrada_reserved"
    entrada = models.ForeignKey(Entrada,related_name="id_entrada",on_delete=models.DO_NOTHING)
    user = models.ForeignKey(Users,related_name="id_user",on_delete=models.DO_NOTHING)

    def __str__(self):
        return str(self.id)