from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Socios
from .serializers import SociosSerializer

class SociosView(viewsets.GenericViewSet):
    def GetSocios(self, request):
        queryset = Socios.objects.all()
        serializer = SociosSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
