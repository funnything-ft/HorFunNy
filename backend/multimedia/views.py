from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from . import serializers
from .models import Post


class CreatePostView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = serializers.CreatePostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RetrievePostView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = serializers.PostSerializer

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)
