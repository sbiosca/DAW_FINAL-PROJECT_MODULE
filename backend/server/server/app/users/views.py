from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Users
from ..profile.serializers import ProfileSerializer
from .serializers import UsersSerializer

class UsersView(viewsets.GenericViewSet):
    def GetUsers(self, request):
        queryset = Users.objects.all()
        serializer = UsersSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)

    def Register(self, request):
        serializer_context = {
            'id_socio': request.data["id_socio"],
            'avatar': request.data["avatar"],
            'email': request.data["email"],
            'username': request.data["username"],
            'password': request.data["password"],
            'name_complet': request.data["name_complet"],
            'addres': request.data["addres"],
            'num_telf': request.data["num_telf"],
            'type': request.data["type"]

        }
        serializer = UsersSerializer.Register(context=serializer_context)
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer["profile_id"]})
        serializer["profile_id"] = serializer_profile
        return Response(serializer, status=status.HTTP_200_OK)
