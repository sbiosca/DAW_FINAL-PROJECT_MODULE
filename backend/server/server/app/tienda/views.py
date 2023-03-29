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
