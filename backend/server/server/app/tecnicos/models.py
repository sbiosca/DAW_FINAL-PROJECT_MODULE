from django.db import models

class Tecnicos(models.Model):
    class Meta:
        db_table = "tecnicos"
    type = models.CharField('type',max_length=20)

    def __str__(self):
        return str(self.id)