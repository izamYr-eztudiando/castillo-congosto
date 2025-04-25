let imagenes = [
    {
        "url": "static/images/entrada-castillo.jpg",
        "nombre": "Castillo Congosto",
        "descripcion": "La boda de sus sueños"
    },
    {
        "url": "static/images/boda1.jpg",
        "nombre": "Vivelo como rey",
        "descripcion": "Es el rey gatito"
    },
    {
        "url": "static/images/mesa.jpg", 
        "nombre":"Come como rey", 
        "descripcion": "Es un gatito comiendo"
    },
    {
        "url": "static/images/dormitorio.jpg",
        "nombre" : "Y duerme como rey",
        "descripcion": "Es un gatito descansando"
    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;
posicionCarousel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `

    posicionCarousel()
})

adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `

    posicionCarousel()
})

function posicionCarousel() {
    if (actual === 0) {
        atras.style.visibility = "hidden";
    } else {
        atras.style.visibility = "visible";
    }

    if (actual === imagenes.length - 1) {
        adelante.style.visibility = "hidden";
    } else {
        adelante.style.visibility = "visible";
    }
    puntos.innerHTML= ""
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else {
            puntos.innerHTML += '<p>.<p>'
        }
    }
}