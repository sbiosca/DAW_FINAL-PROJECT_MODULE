from django.db import models

class Competiciones(models.Model):
    class Meta:
        db_table = "competiciones"
    name = models.CharField('name',max_length=100)
    clasificacion = models.IntegerField('clasificacion')

    def __str__(self):
        return str(self.id)