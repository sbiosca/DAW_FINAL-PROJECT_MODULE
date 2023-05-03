
from pyexpat import model
from rest_framework import serializers
from .models import Entrada_reserved
from django.core.serializers import serialize
from ..entradas.serializers import EntradasSerializer
from ..entradas.models import Entrada
from ..users.serializers import UsersSerializer
from ..users.models import Users

class Entrada_reservedSerializer(serializers.ModelSerializer):
    class Meta:
            model = Entrada_reserved
            fields = ('__all__')
    
    def to_Entrada_reserved(instance):
        return {
            'id': instance.id,
            'id_entrada': instance.entrada.id,
            'id_user': instance.user.id
        }
    
    def GetEntrada_reserved():
        entrada_reserved = Entrada_reserved.objects.all()
        seralizer_entrada = []

        for entradas_reserved in entrada_reserved.iterator():
            ser_entrada = Entrada_reservedSerializer.to_Entrada_reserved(entradas_reserved)
            entrada = EntradasSerializer.GetOneEntrada(id = ser_entrada["id_entrada"])
            user = UsersSerializer.getOneUser(id = ser_entrada["id_user"])
            ser_entrada["id_entrada"] = entrada
            ser_entrada["id_user"] = user
            seralizer_entrada.append(ser_entrada)
            
        return seralizer_entrada       

    def BuyEntrada(context):
        entrada_reserved =  Entrada_reserved.objects.create(
            entrada = Entrada.objects.get(id = context["id_entrada"]),
            user = Users.objects.get(id = context["id_user"])
        )
        ser_entrada_reserved = Entrada_reservedSerializer.to_Entrada_reserved(entrada_reserved)
        entrada = EntradasSerializer.GetOneEntrada(id = ser_entrada_reserved["id_entrada"])
        user = UsersSerializer.getOneUser(id = ser_entrada_reserved["id_user"])
        ser_entrada_reserved["id_entrada"] = entrada
        ser_entrada_reserved["id_user"] = user
        Entrada.objects.bulk_update([Entrada(id=context["id_entrada"], disponible=False)], fields=["disponible"])

        return ser_entrada_reserved
        