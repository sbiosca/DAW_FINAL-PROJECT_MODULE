from django.db import models
from server.app.profile.models import Profile
import jwt
from datetime import timedelta, datetime
from django.conf import settings

class Users(models.Model):
    class Meta:
        db_table = "users"
    profile = models.ForeignKey(Profile, related_name='profile_id', on_delete=models.DO_NOTHING)
    username = models.CharField('username',max_length=50)
    passwd = models.CharField('passwd',max_length=50)

    USERNAME_FIELD = 'username'

    def getUsername(self):
        return self.username

    @property
    def token(self):
        return self.generate_token_jwt(60)
    
    @property
    def ref_token(self):
        return self.generate_token_jwt(10)
    
    def generate_token_jwt(self, time):
        dt = datetime.now() + timedelta(minutes=time)

        token = jwt.encode({
            'id': self.id,
            'username': self.username,
            'exp': int(dt.timestamp())  
        }, settings.SECRET_KEY, algorithm='HS256')

        #return token.decode('utf-8')
        return token
    def __str__(self):
        return str(self.id)