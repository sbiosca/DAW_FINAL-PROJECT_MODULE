from django.db import models
from server.app.profile.models import Profile

class Users(models.Model):
    class Meta:
        db_table = "users"
    profile = models.ForeignKey(Profile, related_name='id_profile', on_delete=models.DO_NOTHING)
    username = models.CharField('username',max_length=50)
    passwd = models.CharField('passwd',max_length=50)

    def __str__(self):
        return str(self.id)