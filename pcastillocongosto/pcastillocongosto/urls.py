# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from django.urls import path, re_path
from django.urls import reverse_lazy
from appcastillocongosto import views
from appcastillocongosto.views import *
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

print("DEBUG:", settings.DEBUG)
print("MEDIA_URL:", settings.MEDIA_URL)
print("MEDIA_ROOT:", settings.MEDIA_ROOT)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('navbar/', views.navbar, name='navbar'),
    path('dossier/', views.dossier, name='dossier'),
    path('ubicacion/', views.ubicacion, name='ubicacion'),
    path('contacto/', views.contacto, name='contacto'),
    path('historia/', views.historia, name='historia'),
    path('servicios/', views.servicios, name='servicios'),
    path('chat/', views.chat, name='chat'),
    path('imagen', views.lista_imagenes, name='lista_imagenes'),
    path('subir_imagen', views.subir_imagen, name='subir_imagen'),
    path('prueba/', views.prueba, name='prueba'),
    path('autor/', views.autor, name='autor'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page=reverse_lazy('home')), name='logout'),
    re_path(r'^(?P<id>\d+)/ver_mensaje$', views.ver_mensaje, name='ver_mensaje'),
    re_path(r'^(?P<id>\d+)/ver_contacto$', views.ver_contacto, name='ver_contacto'),
    re_path(r'^(?P<id>\d+)/eliminar_contacto$', views.eliminar_contacto, name='eliminar_contacto'),
    re_path(r'^(?P<id>\d+)/eliminar_publicacion$', views.eliminar_imagen, name='eliminar_imagen'),
    # re_path('', views.home, name='home'), # siempre ultimo el re_path ya que choca con otros enlaces
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
