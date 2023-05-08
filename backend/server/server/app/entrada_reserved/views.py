from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Entrada_reserved
from .serializers import Entrada_reservedSerializer
from ..entradas.models import Entrada

class Entrada_reservedView(viewsets.GenericViewSet):
    def GetEntrada_reserved(self, request):
        serializer = Entrada_reservedSerializer.GetEntrada_reserved()
        return Response(serializer,status=status.HTTP_200_OK)
    
    def GetEntrada_reserved_User(self, request, id):
        serializer = Entrada_reservedSerializer.GetEntrada_reserved_User(context={'id_user': id})
        return Response(serializer,status=status.HTTP_200_OK)
    
    def BuyEntrada(self, request):
        serializer_context = {
            'id_entrada': request.data["id_entrada"],
            'id_user': request.data["id_user"]
        }
        serializer = Entrada_reservedSerializer.BuyEntrada(context=serializer_context)
        if serializer:
            return Response(serializer, status=status.HTTP_200_OK)
        return Response(False, status=status.HTTP_200_OK)
    
    def CancelEntrada(self, request, id):
        try:
            entrada = Entrada_reserved.objects.get(id=id)
        except Entrada_reserved.DoesNotExist:
            raise NotFound('A entrada with this id does not exist.')
        entrada.delete()
        Entrada.objects.bulk_update([Entrada(id=request.data["id_entrada"], disponible=True)], fields=["disponible"])
        return Response({"entrada DELETED"}, status=status.HTTP_204_NO_CONTENT)
