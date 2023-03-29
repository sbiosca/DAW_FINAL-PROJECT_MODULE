
from pyexpat import model
from rest_framework import serializers
from .models import Tienda
from django.core.serializers import serialize

class TiendaSerializer(serializers.ModelSerializer):
    class Meta:
            model = Tienda
            fields = ('__all__')
    
    def to_Tienda(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
        
        