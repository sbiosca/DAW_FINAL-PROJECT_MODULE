
from pyexpat import model
from rest_framework import serializers
from .models import Profile
from django.core.serializers import serialize

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
            model = Profile
            fields = ('__all__')
    
    def to_Profile(instance):
        return {
            'id': instance.id,
            'socio_id': instance.socio_id,
            'correo': instance.correo,
            'name_complet': instance.name_complet,
            'addres': instance.addres,
            'num_telf': instance.num_telf,
            'avatar': instance.avatar,
            'type': instance.type
        }

    def getProfile(context):
        queryset = Profile.objects.filter(id = context['id']) or False
        if not queryset:
            raise serializers.ValidationError('Profile doesnt found')
        serialized_profile = []

        for profile in queryset.iterator():
            ser_profile = ProfileSerializer.to_Profile(profile)
            serialized_profile.append(ser_profile)

        return serialized_profile
        
        