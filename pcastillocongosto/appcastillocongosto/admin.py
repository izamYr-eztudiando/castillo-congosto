# -*- coding: utf-8 -*-
from django.contrib import admin
from appcastillocongosto.models import *
from django.contrib.auth.models import User

admin.site.site_header = "Sitio web Salmantino"
admin.site.site_title = "Portal de Saludos"
admin.site.index_title = "Bienvenidos al portal de Administración"

class ContactoAdmin(admin.ModelAdmin):
    list_display = [co.name for co in Contacto._meta.get_fields()]
    search_fields = ('id','nombre','apellidos','email','telefono','lugar','fecha','leido','contestado')
    list_filter = ('id','nombre','apellidos','email','telefono','lugar','fecha','leido','contestado')
admin.site.register(Contacto, ContactoAdmin)

# Register your models here.
