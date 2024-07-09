from django.contrib import admin
from django.urls import include, path

urlpatterns = [

    #admin
    path('admin/', admin.site.urls),

    # userauth
    path('api/', include('userauth.urls'))
]
