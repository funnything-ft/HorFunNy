from rest_framework import serializers
from userauth.serializers import UserSerializer

from .models import Post


class CreatePostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['caption', 'image']


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'
