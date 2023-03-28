from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Competiciones
from .serializers import CompeticionesSerializer

class CompeticionesView(viewsets.GenericViewSet):
    def GetCompeticiones(self, request):
        queryset = Competiciones.objects.all()
        serializer = CompeticionesSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
