
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
            'partido_id': instance.partido.id,
            'asiento': instance.asiento,
            'graderia': instance.graderia,
            'fila': instance.fila,
            'precio': instance.precio,
            'disponible': instance.disponible
        }
    
    def GetOneEntrada(id):
        try:
            entrada = Entrada.objects.get(id = id)
        except Exception as e:
            return e
        serialized_entrada = EntradasSerializer.to_Entradas(entrada)
        return serialized_entrada
        
    def AllEntradas():
        entradas = Entrada.objects.all()
        serialized_entradas = []

        for entrada in entradas.iterator():
            parti = EntradasSerializer.to_Entradas(entrada)
            partido = PartidosSerializer.getOnePartido(id = parti["partido_id"])
            parti["partido_id"] = partido
            serialized_entradas.append(parti)

        return serialized_entradas
    
    def GetEntradasbyPartidos(context):
        queryset = Entrada.objects.filter(partido = context["partidos_id"])
        serialized_entradas = []
        
        for entrada in queryset.iterator():
            parti = EntradasSerializer.to_Entradas(entrada)
            partido = PartidosSerializer.getOnePartido(id = parti["partido_id"])
            parti["id_partido"] = partido
            serialized_entradas.append(parti)

        return serialized_entradas    
    
    def CreateEntrada(context):
        entrada = Entrada.objects.create(
            asiento = context["asiento"],
            graderia = context["graderia"],
            fila = context["fila"],
            precio = context["precio"],
            disponible = context["disponible"],
            partido_id = context["partido_id"]
        )
        return entrada
    
    def putEntrada(data, context):
        Entrada.objects.bulk_update([Entrada(id=context, asiento=data["asiento"],graderia=data["graderia"],fila=data["fila"],precio=data["precio"],
                                              disponible=data["disponible"])],fields=["asiento", "graderia", "fila", "precio", "disponible"])
        return "Correct"