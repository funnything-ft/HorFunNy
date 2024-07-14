from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers


class LoginView(generics.CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = serializers.LoginSerializer

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
                            status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            expiry_timestamp = request.session.get_expiry_date()
            time_remaining = (expiry_timestamp -
                              timezone.now()).total_seconds()
            return Response(
                {
                    'isAuthenticated': True,
                    'time_remaining': time_remaining
                },
                status=status.HTTP_200_OK)
        else:
            return Response({'isAuthenticated': False},
                            status=status.HTTP_401_UNAUTHORIZED)


class RefreshSessionView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.session.set_expiry(settings.SESSION_COOKIE_AGE)
        session_expiry = request.session.get_expiry_date()
        return Response({'session_expiration': session_expiry}, status=200)


class RegisterView(generics.CreateAPIView):
    permission_classes = (AllowAny, )
    serializer_class = serializers.RegisterSerializer


class LogoutView(APIView):

    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'},
                        status=status.HTTP_200_OK)


class RetrieveProfileView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = serializers.ProfileSerializer

    def get_object(self):
        user = self.request.user
        profile = models.Profile.objects.get(user=user)
        return profile


class UpdateProfileImage(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = serializers.ProfileImageSerializer

    def get_object(self):
        return self.request.user.profile
