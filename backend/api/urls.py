from django.urls import include, path

urlpatterns = [
    # userauth
    path('', include('userauth.urls')),
    # multimedia
    path('', include('multimedia.urls')),
]
