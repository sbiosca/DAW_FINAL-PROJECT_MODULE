from django.db import models

class Tienda(models.Model):
    class Meta:
        db_table = "tienda"
    name = models.CharField('name',max_length=100)
    lat = models.CharField('lat',max_length=50)
    long = models.CharField('long',max_length=50)
    img = models.CharField('img',max_length=50)

    def __str__(self):
        return str(self.id)