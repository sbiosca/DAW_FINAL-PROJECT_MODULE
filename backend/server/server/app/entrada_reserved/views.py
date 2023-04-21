from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Entrada_reserved
from .serializers import Entrada_reservedSerializer

class Entrada_reservedView(viewsets.GenericViewSet):
    def GetEntrada_reserved(self, request):
        serializer = Entrada_reservedSerializer.GetEntrada_reserved()
        return Response(serializer,status=status.HTTP_200_OK)
