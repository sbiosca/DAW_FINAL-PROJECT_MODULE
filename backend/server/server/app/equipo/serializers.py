
from pyexpat import model
from rest_framework import serializers
from .models import Equipo
from django.core.serializers import serialize

class EquipoSerializer(serializers.ModelSerializer):
    class Meta:
            model = Equipo
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    
    def to_Equipo(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'city': instance.city,
            'stadium': instance.stadium,
            'shield': instance.shield,
            'lat': instance.lat,
            'long': instance.long,
        }
        
        