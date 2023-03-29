
from pyexpat import model
from rest_framework import serializers
from .models import Users
from django.core.serializers import serialize

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
            model = Users
            fields = ('__all__')
    
    def to_Users(instance):
        return {
            'id': instance.id,
            'id_profile': instance.id_profile,
            'username': instance.username,
            'passwd': instance.passwd,
        }
        
        