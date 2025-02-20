from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('profile/',
         views.RetrieveProfileView.as_view(),
         name='retrieve_profile'),
    path('profile/edit/image/',
         views.UpdateProfileImage.as_view(),
         name='edit_profile_image'),
    path('profile/edit/detail/',
         views.UpdateProfileDetail.as_view(),
         name='edit_profile_detail'),
]
