from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Integrantes
from .serializers import IntegrantesSerializer

class IntegrantesView(viewsets.GenericViewSet):
    def GetIntegrantes(self, request):
        queryset = Integrantes.objects.all()
        serializer = IntegrantesSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
