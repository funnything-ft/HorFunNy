from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('refresh/session/',
         views.RefreshSessionView.as_view(),
         name='refresh_token'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/',
         views.RetrieveProfileView.as_view(),
         name='retrieve_profile'),
]
