from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Partidos
from .serializers import PartidosSerializer

class PartidosView(viewsets.GenericViewSet):
    def GetPartidos(self, request):
        serializer = PartidosSerializer.AllPartidos()
        return Response(serializer,status=status.HTTP_200_OK)
    
    def GetPartidosbyCompeti(self, request, *args, **kwargs):
        serializer_context = {
            'competi_id': kwargs["id"]
        }
        serializer = PartidosSerializer.GetPartidosbyCompeti(context=serializer_context)
        return Response(serializer,status=status.HTTP_200_OK)
