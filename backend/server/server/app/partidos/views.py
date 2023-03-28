from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Partidos
from .serializers import PartidosSerializer

class PartidosView(viewsets.GenericViewSet):
    def GetPartidos(self, request):
        queryset = Partidos.objects.all()
        serializer = PartidosSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
