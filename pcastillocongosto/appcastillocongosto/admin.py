# -*- coding: utf-8 -*-
from django.contrib import admin
from appcastillocongosto.models import *
from django.contrib.auth.models import User

admin.site.site_header = "Castillo de Puente del Congosto"
admin.site.site_title = "Portal de Administración"
admin.site.index_title = "Bienvenidos al portal de Administración"

class ContactoAdmin(admin.ModelAdmin):
    list_display = [co.name for co in Contacto._meta.get_fields()]
    search_fields = ('id','nombre','apellidos','email','telefono','lugar','fecha','leido','contestado')
    list_filter = ('id','nombre','apellidos','email','telefono','lugar','fecha','leido','contestado')
admin.site.register(Contacto, ContactoAdmin)

class ImagenAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Imagen._meta.get_fields() if hasattr(field, 'verbose_name')]
    search_fields = ('id', 'titulo', 'descripcion', 'fecha_creacion', 'imagen')
    list_filter = ('id', 'titulo', 'descripcion', 'fecha_creacion', 'imagen')
admin.site.register(Imagen, ImagenAdmin)
# Register your models here.
