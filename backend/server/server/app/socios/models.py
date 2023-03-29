from django.db import models

class Socios(models.Model):
    class Meta:
        db_table = "socios"
    num_socio = models.IntegerField('num_socio')

    def __str__(self):
        return str(self.id)