
from pyexpat import model
from rest_framework import serializers
from .models import Productos
from django.core.serializers import serialize

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
            model = Productos
            fields = ('__all__')
    
    def to_Productos(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'type': instance.type,
            'talla': instance.talla,
            'img': instance.img
        }
        
    def ProductosFiltered(context):
        if context["talla"] and not context["type"] and not context["name"]:
            ProductFiltered = Productos.objects.filter(talla = context["talla"])
        if context["type"] and not context["talla"] and not context["name"]:
            ProductFiltered = Productos.objects.filter(type = context["type"])
        if context["name"] and not context["type"] and not context["talla"]:
            ProductFiltered = Productos.objects.filter(name__contains = context["name"])
        if context["talla"] and context["type"] and not context["name"]:
            ProductFiltered = Productos.objects.filter(talla = context["talla"], type = context["type"])
        if context["talla"] and not context["type"] and context["name"]:
            ProductFiltered = Productos.objects.filter(talla = context["talla"], name__contains = context["name"])
        if not context["talla"] and context["type"] and context["name"]:
            ProductFiltered = Productos.objects.filter(type = context["type"], name__contains = context["name"])
        if context["talla"] and context["type"] and context["name"]:
            ProductFiltered = Productos.objects.filter(talla = context["talla"], type = context["type"], name__contains = context["name"]) 
        return ProductFiltered.values()