
from pyexpat import model
from rest_framework import serializers
from .models import Jugadores
from django.core.serializers import serialize

class JugadoresSerializer(serializers.ModelSerializer):
    class Meta:
            model = Jugadores
            fields = ('__all__')
    
    def to_Jugadores(instance):
        return {
            'id': instance.id,
            'dorsal': instance.dorsal,
            'goles': instance.goles,
            'tarjetas_amar': instance.tarjetas_amar,
            'tarjetas_roj': instance.tarjetas_roj,
            'lesionado': instance.lesionado,
        }
        
        