from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from . import serializers


class CreatePostView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = serializers.CreatePostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
