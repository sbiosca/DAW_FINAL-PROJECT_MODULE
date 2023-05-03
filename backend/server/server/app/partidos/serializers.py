
from pyexpat import model
from rest_framework import serializers
from .models import Partidos
from django.core.serializers import serialize
from ..competiciones.serializers import CompeticionesSerializer

class PartidosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Partidos
            fields = ('__all__')
    
    def to_Partidos(instance):
        return {
            'id': instance.id,
            'id_competi': instance.competi,
            'eq1': instance.eq1,
            'eq2': instance.eq2,
            'horario': instance.horario,
            'resultado': instance.resultado,
            'img_partidos': instance.img_partidos
        }
        
    def CreatePartidos(context):
        partidos = Partidos.objects.create(
            competi = context["id_competi"],
            eq1 = context["eq1"],
            eq2 = context["eq2"],
            horario = context["horario"],
            resultado = context["resultado"],
            img_partidos = context["img_partidos"],
        )
        return partidos
    
    def getOnePartido(id):
        try:
            partido = Partidos.objects.get(id = id)
        except Exception as e:
            return e
        serialized_partido = PartidosSerializer.to_Partidos(partido)
        return serialized_partido

    def AllPartidos():
        partidos = Partidos.objects.all()
        serialized_partidos = []

        for partido in partidos.iterator():
            competi = PartidosSerializer.to_Partidos(partido)
            competicion = CompeticionesSerializer.getOneCompeticion(id = competi["id_competi"])
            competi["id_competi"] = competicion
            serialized_partidos.append(competi)

        return serialized_partidos
    
    def GetPartidosbyCompeti(context):
        queryset = Partidos.objects.filter(competi = context["competi_id"])
        serialized_partidos = []
        
        for partido in queryset.iterator():
            competi = PartidosSerializer.to_Partidos(partido)
            competicion = CompeticionesSerializer.getOneCompeticion(id = competi["id_competi"])
            competi["id_competi"] = competicion
            serialized_partidos.append(competi)

        return serialized_partidos
         