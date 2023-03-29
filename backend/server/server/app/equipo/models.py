from django.db import models

class Equipo(models.Model):
    class Meta:
        db_table = "equipo"
    name = models.CharField('name',max_length=100)
    city = models.CharField('city',max_length=100)
    stadium = models.CharField('stadium',max_length=100)
    shield = models.CharField('shield', max_length=500)
    lat = models.DecimalField('lat', max_digits=15, decimal_places=10)
    long = models.DecimalField('long', max_digits=15, decimal_places=10)

    def __str__(self):
        return str(self.id)