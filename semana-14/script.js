/*
Cambiar imágenes usando un array
1. Crear un array con al menos 4 rutas o URLs de imágenes.

2. Mostrar la primera imagen del array al cargar la página.
3. Crear una variable llamada posicionActual que inicie en 0.
4.Al hacer clic en el botón Siguiente, aumentar la posición actual.
5. Mostrar la imagen correspondiente usando setAttribute().

6. Si se llega a la última imagen, volver a mostrar la primera.

*/
const imagen = document.querySelector("img");
const btnSiguiente = document.querySelector('#btnSiguiente');
const span = document.querySelector('span');
let posicionActual = 0;
const array = [
    "images/foto1.jpg",  // 0
    "images/foto2.jpg",  // 1
    "images/foto3.jpg",  // 2
    "images/foto4.jpg",  // 3
    "images/foto5.jpg"   // 4
];

function mostrarPosicion(pos){
    span.innerText = pos;
}

function mostrarFoto(pos){
    const fotoURL = array[pos];
    imagen.setAttribute('src', fotoURL);
}

function aumentarPosicion(){

    if( posicionActual >= array.length-1){
        posicionActual = 0;
    } else {
        // posicionActual++;
        posicionActual = posicionActual + 1;
    }

    mostrarPosicion(posicionActual);
    mostrarFoto(posicionActual);
}
btnSiguiente.addEventListener('click', aumentarPosicion);


mostrarFoto(posicionActual);
mostrarPosicion(posicionActual);

function saludar(){
    console.log("Hola 👋");
}

           // funcion       , intervalo
setInterval( aumentarPosicion, 3000);


// Ejemplo dos
const promos = [
    { 
        titulo: 'Promoción de Descuentos del 20%', 
        detalle: 'Valido hasta el 15/06/26',
        color: 'tomato'
    },
    { 
        titulo: 'Envio Gratis', 
        detalle: 'Para compras mayores a $30.000',
        color: 'teal'
    },
    { 
        titulo: 'Descuento del 10%', 
        detalle: 'Pagando por transferencia',
        color: 'slateblue'
    }
];

const promoH4 = document.querySelector('.promo h4');
const promoP = document.querySelector('.promo p');
const promoSpan = document.querySelector('.promo');

let promoActual = 0;
function cambiarPromo(){
   // console.log(promoActual);
    if( promoActual < promos.length -1) {
        promoActual++;
    } else {
        promoActual = 0;
    }
    const titulo = promos[promoActual].titulo;
    const detalle = promos[promoActual].detalle;
    const color = promos[promoActual].color;
    promoH4.innerText = titulo;
    promoP.innerText = detalle;
    promoSpan.style.backgroundColor = color;
}

setInterval( cambiarPromo, 2500);

