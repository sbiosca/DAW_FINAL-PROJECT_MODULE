from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Integrantes
from .serializers import IntegrantesSerializer

class IntegrantesView(viewsets.GenericViewSet):
    def GetIntegrantes(self, request):
        serializer = IntegrantesSerializer.GetIntegrantes()
        return Response(serializer,status=status.HTTP_200_OK)

    def putIntegrante(self, request, *args , **kwargs):
        serializer_user = IntegrantesSerializer.putIntegrante(data=request.data, context=kwargs["id"])

        return Response(serializer_user, status=status.HTTP_200_OK) 