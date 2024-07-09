from django.contrib.auth import authenticate, login
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from . import serializers


class LoginView(generics.CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = serializers.UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Successfully logged in'},
                            status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'},
                            status=status.HTTP_400_BAD_REQUEST)
