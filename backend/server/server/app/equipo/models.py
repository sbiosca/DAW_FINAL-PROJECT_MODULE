from django.db import models

class Equipo(models.Model):
    class Meta:
        db_table = "equipo"
    name = models.CharField('name',max_length=100)
    city = models.CharField('city',max_length=100)
    stadium = models.CharField('stadium',max_length=100)
    shield = models.CharField('shield', max_length=500)
    lat = models.CharField('lat', max_length=100)
    long = models.CharField('long', max_length=100)

    def __str__(self):
        return str(self.id)