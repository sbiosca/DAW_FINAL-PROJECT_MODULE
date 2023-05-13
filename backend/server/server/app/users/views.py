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
            'socio_id': request.data["id_socio"],
            'avatar': request.data["avatar"],
            'email': request.data["email"],
            'username': request.data["username"],
            'passwd': request.data["passwd"],
            'name_complet': request.data["name_complet"],
            'addres': request.data["addres"],
            'num_telf': request.data["num_telf"],
            'type': request.data["type"]

        }
        serializer = UsersSerializer.Register(context=serializer_context)
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer["id_profile"]})
        serializer["id_profile"] = serializer_profile
        return Response(serializer, status=status.HTTP_200_OK)
    
    def Login(self, request):
        serializer_login = {
            'username': request.data["username"],
            'password': request.data["password"]
        }
        serializer = UsersSerializer.loginSerializer(context=serializer_login)
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer["id_profile"]})
        serializer["id_profile"] = serializer_profile

        return Response(serializer, status=status.HTTP_200_OK)
    
    def getInforUser(self, request, *args , **kwargs):

        serializer_user = UsersSerializer.getUser(context={'id': kwargs["id"]})
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer_user["id_profile"]})
        serializer_user["id_profile"] = serializer_profile

        return Response(serializer_user, status=status.HTTP_200_OK)

    def isAdmin(self, request, *args, **kwargs):
        serializer_context = {
            'id': kwargs["id"]
        }

        serializer = UsersSerializer.getAdmin(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)
    
    def putUser(self, request, *args , **kwargs):
        serializer_user = UsersSerializer.putUser(data=request.data, context=kwargs["id"])

        return Response(serializer_user, status=status.HTTP_200_OK) 