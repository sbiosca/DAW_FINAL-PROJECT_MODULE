from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import News
from .serializers import NewsSerializer

class NewsView(viewsets.GenericViewSet):
    def GetNews(self, request):
        queryset = News.objects.all()
        serializer = NewsSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)
