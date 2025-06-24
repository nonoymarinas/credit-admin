from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('newcredit', views.newcredit, name='newcredit'),
    path('newdebtor', views.newdebtor, name='newdebtor'),
]
