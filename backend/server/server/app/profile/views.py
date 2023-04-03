from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Profile
from .serializers import ProfileSerializer

class ProfileView(viewsets.GenericViewSet):
    def GetProfile(self, request, *args, **kwargs):
        serializer_context = {
            'id': kwargs["id"]
        }

        serializer = ProfileSerializer.getProfile(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)
