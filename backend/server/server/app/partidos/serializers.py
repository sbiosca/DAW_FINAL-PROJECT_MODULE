
from pyexpat import model
from rest_framework import serializers
from .models import Partidos
from django.core.serializers import serialize

class PartidosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Partidos
            fields = ('__all__')
    
    def to_Partidos(instance):
        return {
            'id': instance.id,
            'id_competi': instance.id_competi,
            'eq1': instance.eq1,
            'eq2': instance.eq2,
            'horario': instance.horario,
            'resultado': instance.resultado,
        }
        
        