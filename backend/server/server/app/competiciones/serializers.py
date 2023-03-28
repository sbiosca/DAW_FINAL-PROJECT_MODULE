
from pyexpat import model
from rest_framework import serializers
from .models import Competiciones
from django.core.serializers import serialize

class CompeticionesSerializer(serializers.ModelSerializer):
    class Meta:
            model = Competiciones
            fields = ('__all__')
    
    def to_Competiciones(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'clasificacion': instance.clasificacion,
        }
        
        