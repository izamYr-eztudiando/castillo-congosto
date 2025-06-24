# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from django.urls import path, re_path
from django.urls import reverse_lazy
from appcastillocongosto import views
from appcastillocongosto.views import *
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('navbar/', views.navbar, name='navbar'),
    path('dossier/', views.dossier, name='dossier'),
    path('ubicacion/', views.ubicacion, name='ubicacion'),
    path('contacto/', views.contacto, name='contacto'),
    path('historia/', views.historia, name='historia'),
    path('servicios/', views.servicios, name='servicios'),
    path('chat/', views.chat, name='chat'),
    path('imagen/', views.imagen, name='imagen'),
    path('prueba/', views.prueba, name='prueba'),
    path('autor/', views.autor, name='autor'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page=reverse_lazy('home')), name='logout'),
    re_path(r'^(?P<id>\d+)/ver_mensaje$', views.ver_mensaje, name='ver_mensaje'),
    re_path(r'^(?P<id>\d+)/ver_contacto$', views.ver_contacto, name='ver_contacto'),
    re_path(r'^(?P<id>\d+)/eliminar_contacto$', views.eliminar_contacto, name='eliminar_contacto'),
    re_path('', views.home, name='home'), # siempre ultimo el re_path ya que choca con otros enlaces
]