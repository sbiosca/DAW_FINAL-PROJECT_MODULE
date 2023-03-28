
from pyexpat import model
from rest_framework import serializers
from .models import Entrada_reserved
from django.core.serializers import serialize

class Entrada_reservedSerializer(serializers.ModelSerializer):
    class Meta:
            model = Entrada_reserved
            fields = ('__all__')
    
    def to_Entrada_reserved(instance):
        return {
            'id': instance.id,
            'id_entrada': instance.id_entrada,
            'id_user': instance.id_user
        }
        
        