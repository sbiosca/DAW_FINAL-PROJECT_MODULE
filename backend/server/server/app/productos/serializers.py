
from pyexpat import model
from rest_framework import serializers
from .models import Productos
from django.core.serializers import serialize

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Productos
            fields = ('__all__')
    
    def to_Productos(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'type': instance.type,
            'talla': instance.talla,
            'img': instance.img
        }
        
        