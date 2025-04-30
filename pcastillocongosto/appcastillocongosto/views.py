from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
DEBUG = True

def home(request):
    print("Estamos en hombre " +str(DEBUG))
    context = {}
    return render(request, 'home.html', context=context)

def navbar(request):
    context = {}
    return render(request, 'navbar.html', context=context)

def dossier(request):
    context = {}
    return render(request, 'dossier.html', context=context)

def ubicacion(request):
    context = {}
    return render(request, 'ubicacion.html', context=context)

def contacto(request):
    context = {}
    return render(request, 'contacto.html', context=context)

def historia(request):
    context = {}
    return render(request, 'historia.html', context=context)

def servicios(request):
    context = {}
    return render(request, 'servicios.html', context=context)
# def resenas(request):
#     context = {}
#     return render(request, 'resenas.html', context=context)