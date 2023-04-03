from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Tienda
from .serializers import TiendaSerializer

class TiendaView(viewsets.GenericViewSet):
    def GetTienda(self, request):
        queryset = Tienda.objects.all()
        serializer = TiendaSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
    
    def AddTienda(self, request):
        serializer_data = request.data
        TiendaSerializer.AddTienda(context=serializer_data)
        return Response({"ADDED NEW Tienda SUCCESFULL"}, status=status.HTTP_201_CREATED)

    def UpdateTienda(self, request, id):
        serializer_data = request.data
        update = TiendaSerializer.UpdateTienda(context=serializer_data, id= id)
        return Response(update, status=status.HTTP_201_CREATED)

    def DeleteTienda(self, request, id):
        try:
            tienda = Tienda.objects.get(id=id)
        except Tienda.DoesNotExist:
            raise NotFound('A Tienda with this id does not exist.')

        tienda.delete()
        return Response({"Tienda DELETED"}, status=status.HTTP_204_NO_CONTENT)
    
