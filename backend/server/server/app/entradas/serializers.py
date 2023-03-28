
from pyexpat import model
from rest_framework import serializers
from .models import Entrada
from django.core.serializers import serialize

class EntradasSerializer(serializers.ModelSerializer):
    class Meta:
            model = Entrada
            fields = ('__all__')
    
    def to_Entradas(instance):
        return {
            'id': instance.id,
            'id_partido': instance.id_partido,
            'asiento': instance.asiento,
            'graderia': instance.graderia,
            'fila': instance.fila,
            'precio': instance.precio,
            'disponible': instance.disponible
        }
        
        