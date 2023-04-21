
from pyexpat import model
from rest_framework import serializers
from .models import Users
from django.shortcuts import get_object_or_404
from ..profile.serializers import ProfileSerializer
from django.http import Http404
from ..profile.models import Profile
from django.contrib.auth.hashers import make_password, check_password

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
            model = Users
            fields = ('__all__')
    
    def to_Users(instance):
        return {
            'id': instance.id,
            'id_profile': instance.profile_id,
            'username': instance.username,
            'passwd': instance.passwd,
            'token': instance.token,
            'ref_token': instance.ref_token,
            'isAdmin': instance.admin
        }
        
    def Register(context):   

        user_exist=Users.objects.filter(username=context['username']).exists()
        if user_exist:
            raise serializers.ValidationError("User '{}' has already existed".format(context['username']))
        else:
            new_profile = Profile.objects.create(
                avatar = context['avatar'],
                correo = context['email'],
                name_complet= context["name_complet"],
                addres = context["addres"],
                num_telf = context["num_telf"],
                type = context["type"],
                socio_id = context["socio_id"],
            )
            ProfileSerializer.to_Profile(new_profile)
            profile = Profile.objects.get(id = new_profile.id)
            user = Users.objects.create(
                username = context['username'],
                passwd = make_password(context['passwd']),
                profile = profile
            )
            serialized_user = UsersSerializer.to_Users(user)
            return serialized_user
        
    def loginSerializer(context):
        password = context['password']
        user = get_object_or_404(Users, username=context['username'])
        
        if not check_password(password, user.passwd):
            raise Http404

        serialized_user = UsersSerializer.to_Users(user)
        return serialized_user
    
    def getUser(context):
        user = Users.objects.get(id = context["id"])
        serialized_user = UsersSerializer.to_Users(user)
        return serialized_user
        
    def getAdmin(context):
        adminId = Users.objects.get(id=context['id'])
        serialized_user = UsersSerializer.to_Users(adminId)
        if not serialized_user["isAdmin"]:
            raise serializers.ValidationError('UserAdmin is not foud')
        return serialized_user