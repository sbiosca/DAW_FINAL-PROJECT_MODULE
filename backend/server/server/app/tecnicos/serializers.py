
from pyexpat import model
from rest_framework import serializers
from .models import Tecnicos
from django.core.serializers import serialize

class TecnicosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Tecnicos
            fields = ('__all__')
    
    def to_Tecnicos(instance):
        return {
            'id': instance.id,
            'type': instance.type
        }
        
        