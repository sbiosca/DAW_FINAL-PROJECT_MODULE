
from pyexpat import model
from rest_framework import serializers
from .models import Profile
from django.core.serializers import serialize

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
            model = Profile
            fields = ('__all__')
    
    def to_Profile(instance):
        return {
            'id': instance.id,
            'id_socio': instance.id_socio,
            'correo': instance.correo,
            'name_complet': instance.name_complet,
            'addres': instance.addres,
            'num_telf': instance.num_telf,
            'avatar': instance.avatar,
            'type': instance.type
        }
        
        