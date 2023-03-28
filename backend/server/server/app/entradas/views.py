from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Entrada
from .serializers import EntradasSerializer

class EntradasView(viewsets.GenericViewSet):
    def GetEntradas(self, request):
        queryset = Entrada.objects.all()
        serializer = EntradasSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
