from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Partidos
from .serializers import PartidosSerializer

class PartidosView(viewsets.GenericViewSet):
    def GetPartidos(self, request):
        serializer = PartidosSerializer.AllPartidos()
        return Response(serializer,status=status.HTTP_200_OK)
    
    def getOnePartido(self, request, *args, **kwargs):
        serializer_context = {
            'partido_id': kwargs["id"]
        }
        serializer = PartidosSerializer.getOnePartido(context=serializer_context)
        return Response(serializer,status=status.HTTP_200_OK)
    
    def GetPartidosbyCompeti(self, request, *args, **kwargs):
        serializer_context = {
            'competi_id': kwargs["id"]
        }
        serializer = PartidosSerializer.GetPartidosbyCompeti(context=serializer_context)
        return Response(serializer,status=status.HTTP_200_OK)

    def CreatePartidos(self, request):
        serializer_data = request.data
        PartidosSerializer.CreatePartidos(context=serializer_data)
        return Response({"ADDED NEW MATCH SUCCESFULL"}, status=status.HTTP_201_CREATED)
    
    def putPartidos(self, request, *args , **kwargs):
        serializer_user = PartidosSerializer.putPartidos(data=request.data, context=kwargs["id"])

        return Response(serializer_user, status=status.HTTP_200_OK) 
    
    def DeletePartidos(self, request, id):
        try:
            partidos = Partidos.objects.get(id=id)
        except Partidos.DoesNotExist:
            raise NotFound('A Partidos with this id does not exist.')

        partidos.delete()
        return Response({"Partidos DELETED"}, status=status.HTTP_204_NO_CONTENT)