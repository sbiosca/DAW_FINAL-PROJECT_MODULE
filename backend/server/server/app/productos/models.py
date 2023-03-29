from django.db import models

class Productos(models.Model):
    class Meta:
        db_table = "productos"
    name = models.CharField('name',max_length=100)
    type = models.CharField('type',max_length=100)
    talla = models.CharField('talla',max_length=50)
    img = models.CharField('img',max_length=50)

    def __str__(self):
        return str(self.id)