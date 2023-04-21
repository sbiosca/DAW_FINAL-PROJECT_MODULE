
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
    
    def GetEntrada_reserved():
        entrada_reserved = Entrada_reserved.objects.all()
        seralizer_entrada = []

        for entradas_reserved in entrada_reserved.iterator():
            ser_entrada = Entrada_reservedSerializer.to_Entrada_reserved(entradas_reserved)
            seralizer_entrada.append(ser_entrada)
            
        return seralizer_entrada        
        