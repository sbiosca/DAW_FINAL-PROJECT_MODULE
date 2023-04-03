
from pyexpat import model
from rest_framework import serializers
from .models import Users
from ..profile.serializers import ProfileSerializer
from ..profile.models import Profile
from django.contrib.auth.hashers import make_password, check_password

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
            model = Users
            fields = ('__all__')
    
    def to_Users(instance):
        return {
            'id': instance.id,
            'id_profile': instance.id_profile,
            'username': instance.username,
            'passwd': instance.passwd,
        }
        
    def register(context):   

        user_exist=Users.objects.filter(username=context['username']).exists()
        if user_exist:
            raise serializers.ValidationError("User '{}' has already existed".format(context['username']))
        else:
            new_profile = Profile.objects.create(
                avatar = context['avatar'],
                email = context['email'],
                name_complet= context["name_complet"],
                addres = context["addres"],
                num_telf = context["num_telf"],
                type = context["type"],
                id_socio = context["id_socio"],
            )
            ProfileSerializer.to_profile(new_profile)
            profile = Profile.objects.get(id = new_profile.id)
            user = Users.objects.create(
                username = context['username'],
                password = make_password(context['password']),
                profile = profile
            )
            serialized_user = UsersSerializer.to_user(user)
            return serialized_user

        