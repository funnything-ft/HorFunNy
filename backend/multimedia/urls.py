from django.urls import path

from . import views

urlpatterns = [
    path('post/create/', views.CreatePostView.as_view(), name='create_post'),
    path('post/', views.RetrievePostView.as_view(), name='retrieve_posts')
]
