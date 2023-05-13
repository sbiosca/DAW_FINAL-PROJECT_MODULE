
from pyexpat import model
from rest_framework import serializers
from .models import Integrantes
from ..jugadores.models import Jugadores
from ..tecnicos.models import Tecnicos
from ..jugadores.serializers import JugadoresSerializer
from ..tecnicos.serializers import TecnicosSerializer
from django.core.serializers import serialize

class IntegrantesSerializer(serializers.ModelSerializer):
    class Meta:
            model = Integrantes
            fields = ('__all__')

    def to_Integrantes(instance):
        return {
            'id': instance.id,
            'id_player': instance.player.id,
            'id_tecn': instance.tecnico.id,
            'name': instance.name,
            'apellidos': instance.apellidos,
            'nacionalidad': instance.nacionalidad,
            'fech_naci': instance.fech_naci,
            'avatar': instance.avatar,
        }
        

    def GetIntegrantes():
        queryset = Integrantes.objects.all()
        serialized_integrantes = []
        
        for integrante in queryset.iterator():
            inte = IntegrantesSerializer.to_Integrantes(integrante)
            jugador = JugadoresSerializer.getOneJugador(id = inte["id_player"])
            tecnico = TecnicosSerializer.getOneTecnicos(id = inte["id_tecn"])
            inte["id_player"] = jugador
            inte["id_tecn"] = tecnico
            serialized_integrantes.append(inte)

        return serialized_integrantes
    
    def putIntegrante(data, context):
        Integrantes.objects.bulk_update([Integrantes(id=context, name=data["name"], apellidos=data["apellidos"] , nacionalidad=data["nacionalidad"], 
                                                     fech_naci=data["fech_naci"], avatar=data["avatar"])],fields=["name", "apellidos", "nacionalidad",
                                                                                                                     "fech_naci", "avatar"])
        if data["player_id"]:
            Jugadores.objects.bulk_update([Jugadores(id=data["player_id"], dorsal=data["dorsal"], goles=data["goles"], tarjetas_amar=data["tarjetas_amar"], 
                                                     tarjetas_roj=data["tarjetas_roj"], lesionado=data["lesionado"])],fields=["dorsal", "tarjetas_amar", "goles",
                                                                                                                     "tarjetas_roj", "lesionado"])
        if data["tecnico_id"]:
            Tecnicos.objects.bulk_update([Tecnicos(id=data["tecnico_id"], type=data["type"])],fields=["type"])
        return "Correct"