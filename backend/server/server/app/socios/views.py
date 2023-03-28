from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Equipo
from .serializers import EquipoSerializer

class EquipoView(viewsets.GenericViewSet):
    def GetEquipo(self, request):
        queryset = Equipo.objects.all()
        serializer = EquipoSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
