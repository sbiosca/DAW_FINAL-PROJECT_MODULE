from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Entrada
from .serializers import EntradasSerializer

class EntradasView(viewsets.GenericViewSet):
    def GetEntradas(self, request):
        serializer = EntradasSerializer.AllEntradas()
        return Response(serializer,status=status.HTTP_200_OK)

    def GetEntradasbyPartidos(self, request, *args, **kwargs):
        serializer_context = {
            'partidos_id': kwargs["id"]
        }
        serializer = EntradasSerializer.GetEntradasbyPartidos(context=serializer_context)
        return Response(serializer,status=status.HTTP_200_OK)
    
    def CreateEntrada(self, request):
        serializer_data = request.data
        EntradasSerializer.CreateEntrada(context=serializer_data)
        return Response({"ADDED NEW TICKET SUCCESFULL"}, status=status.HTTP_201_CREATED)
    
    def putEntrada(self, request, *args , **kwargs):
        serializer_user = EntradasSerializer.putEntrada(data=request.data, context=kwargs["id"])

        return Response(serializer_user, status=status.HTTP_200_OK) 
