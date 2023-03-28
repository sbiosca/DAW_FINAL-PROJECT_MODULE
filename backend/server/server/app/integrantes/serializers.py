
from pyexpat import model
from rest_framework import serializers
from .models import Integrantes
from django.core.serializers import serialize

class IntegrantesSerializer(serializers.ModelSerializer):
    class Meta:
            model = Integrantes
            fields = ('__all__')

    def to_Integrantes(instance):
        return {
            'id': instance.id,
            'id_player': instance.id_player,
            'id_tecn': instance.id_tecn,
            'name': instance.name,
            'apellidos': instance.apellidos,
            'nacionalidad': instance.nacionalidad,
            'fech_naci': instance.fech_naci,
            'avatar': instance.avatar,
        }
        
        