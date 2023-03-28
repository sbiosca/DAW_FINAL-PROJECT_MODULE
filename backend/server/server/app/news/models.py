from django.db import models

class News(models.Model):
    class Meta:
        managed = False
        db_table = "news"
    descr = models.CharField('descr',max_length=1000)
    img = models.CharField('city',max_length=100)

    def __str__(self):
        return str(self.id)