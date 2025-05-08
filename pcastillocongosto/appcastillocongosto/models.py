# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
###################################
# Contacto
###################################

class Contacto(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField("Nombre", max_length=25)
    apellidos = models.CharField("Apellidos", max_length=100, null=True, blank=True)
    email = models.CharField("Email", max_length=100, null=True, blank=True)
    telefono = models.CharField("Telefono", max_length=9, null=True, blank=True)
    lugar = models.CharField("Lugar", max_length=100, null=True, blank=True)
    fecha = models.DateTimeField("Fecha y Hora", default=timezone.now)
    mensaje = models.TextField("Mensaje")
    leido = models.BooleanField("Leido", default=False)
    contestado = models.BooleanField("Contestado", default=False)

    class Meta:
        verbose_name = "Contacto"
        verbose_name_plural = "Contactos"
        ordering = ['nombre']

    def __str__(self):
        return '%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,' % (self.id, self.nombre, self.apellidos, self.email, self.telefono, self.lugar, self.fecha, self.mensaje, self.leido, self.contestado)