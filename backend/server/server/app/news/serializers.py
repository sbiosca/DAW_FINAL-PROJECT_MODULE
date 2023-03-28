
from pyexpat import model
from rest_framework import serializers
from .models import News
from django.core.serializers import serialize

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
            model = News
            fields = ('__all__')
    
    def to_News(instance):
        return {
            'id': instance.id,
            'descr': instance.descr,
            'img': instance.img,
        }
        
        