from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import Profile, User


class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'password']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,
                                     required=True,
                                     validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Passowrd fields didn\'t match.'})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'],
                                   email=validated_data['email'])

        user.set_password(validated_data['password'])
        user.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username']


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = '__all__'


class ProfileImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['image']


class UpdateProfileDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['name', 'desc', 'gender']
