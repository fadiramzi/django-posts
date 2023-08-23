from . import views
from django.urls import path
urlpatterns = [
    path('', views.index, name='index'),
    path('load', views.posts, name='posts'),

]