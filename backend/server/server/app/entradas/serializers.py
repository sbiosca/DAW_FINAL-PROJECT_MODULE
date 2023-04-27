
from pyexpat import model
from rest_framework import serializers
from .models import Entrada
from django.core.serializers import serialize
from ..partidos.serializers import PartidosSerializer

class EntradasSerializer(serializers.ModelSerializer):
    class Meta:
            model = Entrada
            fields = ('__all__')
    
    def to_Entradas(instance):
        return {
            'id': instance.id,
            'id_partido': instance.partido,
            'asiento': instance.asiento,
            'graderia': instance.graderia,
            'fila': instance.fila,
            'precio': instance.precio,
            'disponible': instance.disponible
        }
        
    def AllEntradas():
        entradas = Entrada.objects.all()
        serialized_entradas = []

        for entrada in entradas.iterator():
            parti = EntradasSerializer.to_Entradas(entrada)
            # partido = PartidosSerializer.getOnePartido(id = parti["id_partido"])
            # parti["id_partido"] = partido
            serialized_entradas.append(parti)
            print(parti["id_partido"])
            #print(serialized_entradas)

        return serialized_entradas
    
    def GetEntradasbyPartidos(context):
        queryset = Entrada.objects.filter(partido = context["partidos_id"])
        serialized_entradas = []
        
        for entrada in queryset.iterator():
            parti = EntradasSerializer.to_Entradas(entrada)
            partido = PartidosSerializer.getOnePartido(id = parti["id_partido"])
            parti["id_partido"] = partido
            serialized_entradas.append(parti)

        return serialized_entradas    