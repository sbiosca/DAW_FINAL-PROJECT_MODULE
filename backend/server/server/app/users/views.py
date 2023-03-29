from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Users
from .serializers import UsersSerializer

class UsersView(viewsets.GenericViewSet):
    def GetUsers(self, request):
        queryset = Users.objects.all()
        serializer = UsersSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
