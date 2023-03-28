from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Productos
from .serializers import ProductosSerializer

class ProductosView(viewsets.GenericViewSet):
    def GetProductos(self, request):
        queryset = Productos.objects.all()
        serializer = ProductosSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
