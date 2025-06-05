from __future__ import unicode_literals
from django.shortcuts import render, redirect, get_object_or_404
from appcastillocongosto.models import *
from django.http import HttpResponse

# Paginación
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
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
        mensaje = request.POST.get('mensaje')
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
    lista_contactos = Contacto.objects.all().order_by('leido')
    numcontactos = Contacto.objects.count()
    numleidos = Contacto.objects.filter(leido=False).count()
    numcontestados = Contacto.objects.filter(contestado=False).count()
    # Paginación de los contactos, 10 contactos por página
    page = request.GET.get('page')
    paginator = Paginator(lista_contactos, 10)
    if page == None:
        print(" page recibe fuera de get o post NONE ="+ str(page))
        page = paginator.num_pages
        request.session["pagina"] = page
    else:
        print(" page recibe este del nonede geo o post="+ str(page))
        request.session["pagina"] = page
    
    if request.method == 'GET':
        pagina = request.session["pagina"]
        print(" page recibe en GET=" + str(pagina))
    if request.method == 'POST':
        pagina = request.session["pagina"]
        print(" page recibe en POST= " +str(pagina))

    # condición muy importante para saber si existe la varible en la sesión
    if "pagina" in request.session:
        page = request.session["pagina"]
        print(" page recibe de sesion=" +str(page))

    try:
        lista_contactos = paginator.get_page(page)
    except PageNotAnInteger: 
        lista_contactos = paginator.page(1)
    except EmptyPage:
        lista_contactos = paginator.page(paginator.num_pages)

    if request.method == 'POST':
        return redirect('chat')
    context = {'lista_contactos': lista_contactos, 'numleidos': numleidos, 'numcontestados': numcontestados, 'numcontactos': numcontactos}
    return render(request, 'chat.html', context=context)

def ver_contacto(request, id):
    contacto = get_object_or_404(Contacto, id=id)
    contacto.contestado = True
    contacto.save()
    numero = contacto.telefono
    return redirect(f"https://wa.me/34{numero}")

def ver_mensaje(request, id):
    contacto = Contacto.objects.get(id=id)
    if request.method == 'POST':
        contacto.leido = True
        contacto.save()
        return redirect('chat')
    context = {'contacto': contacto}
    return render (request, 'ver_mensaje.html', context=context)

# def resenas(request):
#     context = {}
#     return render(request, 'resenas.html', context=context)

def prueba(request):
    context = {}
    return render (request, 'prueba.html', context=context)