let nombre;
const pPelicula = document.querySelector('#pelicula');
let titulo;
let duracion;
const dContenido = document.querySelector('#contenido');

function agregarPelicula(){
    titulo = prompt('Ingrese el título');
    duracion = +prompt('Ingrese la duración en minutos');

    dContenido.innerHTML = '<h4>' + titulo + '</h4>';
    // dContenido.innerHTML = dContenido.innerHTML + '<p>' + duracion + ' min </p>';
    dContenido.innerHTML += '<p>' + duracion + ' min </p>';

}

function comprarEntrada(){
    nombre = prompt('¿Que pelicula queres ver?');
    pPelicula.innerText = nombre;
} 


/* PLUS de Validaciones */
/*
function comprarEntrada(){
    do {
        nombre = prompt('¿Que pelicula queres ver?');
    } while(nombre == "");
    
    pPelicula.innerText = nombre;
}
*/