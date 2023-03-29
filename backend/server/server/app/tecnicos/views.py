from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Tecnicos
from .serializers import TecnicosSerializer

class TecnicosView(viewsets.GenericViewSet):
    def GetTecnicos(self, request):
        queryset = Tecnicos.objects.all()
        serializer = TecnicosSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
