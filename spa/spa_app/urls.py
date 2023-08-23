from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:section>', views.section, name='section'),

]