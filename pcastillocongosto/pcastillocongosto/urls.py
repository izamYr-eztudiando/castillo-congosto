# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from django.urls import path, include, re_path
from appcastillocongosto import views
from appcastillocongosto.views import *

from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required

from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('navbar/', views.navbar, name='navbar'),
    path('dossier/', views.dossier, name='dossier'),
    path('ubicacion/', views.ubicacion, name='ubicacion'),
    path('contacto/', views.contacto, name='contacto'),
    path('historia/', views.historia, name='historia'),
    path('servicios/', views.servicios, name='servicios'),
    path('chat/', views.chat, name='chat'),
    re_path(r'^(?P<id>\d+)/ver_mensaje$', views.ver_mensaje, name='ver_mensaje'),
    re_path(r'^(?P<id>\d+)/ver_contacto$', views.ver_contacto, name='ver_contacto'),
    re_path('', views.home, name='home'), # siempre ultimo el re_path ya que choca con otros enlaces
    # path('resenas/', views.resenas, name='resenas'),
]

#urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)