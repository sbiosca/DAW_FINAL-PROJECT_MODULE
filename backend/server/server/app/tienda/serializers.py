
from pyexpat import model
from rest_framework import serializers
from .models import Tienda
from django.core.serializers import serialize

class TiendaSerializer(serializers.ModelSerializer):
    class Meta:
            model = Tienda
            fields = ('__all__')
    
    def to_Tienda(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
    
    def AddTienda(context):
        tienda = Tienda.objects.create(
            name = context["name"],
            lat = context["lat"],
            long = context["long"],
            img = context["img"]
        )
        return tienda
    
    def UpdateTienda(context, id):
        Tienda.objects.bulk_update([Tienda(id=id, name=context['name'], long=context['long'], lat=context['lat'], img=context['img'])], fields=["name", "long", "lat", "img"])
        return "Correct"