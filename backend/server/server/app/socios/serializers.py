
from pyexpat import model
from rest_framework import serializers
from .models import Socios
from django.core.serializers import serialize

class SociosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Socios
            fields = ('__all__')
    
    def to_Socios(instance):
        return {
            'id': instance.id,
            'num_socio': instance.num_socio,
        }
        
        