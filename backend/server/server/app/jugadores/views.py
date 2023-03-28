from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Jugadores
from .serializers import JugadoresSerializer

class JugadoresView(viewsets.GenericViewSet):
    def GetJugadores(self, request):
        queryset = Jugadores.objects.all()
        serializer = JugadoresSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
