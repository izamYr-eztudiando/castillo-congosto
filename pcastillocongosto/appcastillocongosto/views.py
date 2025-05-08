from __future__ import unicode_literals
from django.shortcuts import render, redirect, get_object_or_404
from appcastillocongosto.models import *
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
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        apellidos = request.POST.get('apellidos')
        lugar = request.POST.get('lugar')
        telefono = request.POST.get('telefono')
        email = request.POST.get('email')
        mensaje = request.POST.get('email')
        contacto = Contacto(nombre=nombre, apellidos=apellidos, lugar=lugar, telefono=telefono, email=email, mensaje=mensaje)
        contacto.save()
        return redirect('chat')
    return render(request, 'contacto.html')

def historia(request):
    context = {}
    return render(request, 'historia.html', context=context)

def servicios(request):
    context = {}
    return render(request, 'servicios.html', context=context)

def chat(request):
    lista_contactos = Contacto.objects.all().order_by('id')
    numchats = 0
    for r in lista_contactos:
        numchats = numchats + 1
    context = {'lista_contactos': lista_contactos, 'numchats': numchats}
    return render(request, 'chat.html', context=context)


# def resenas(request):
#     context = {}
#     return render(request, 'resenas.html', context=context)