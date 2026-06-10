const productos = [
    {
        nombre: 'Mouse',
        precio: 2500,
        foto: 'images/mouse.png'
    },
    {
        nombre: 'Teclado',
        precio: 35000,
        foto: 'images/teclado.png'
    },
    {
        nombre: 'Monitor',
        precio: 65000,
        foto: 'images/monitor.png'
    },
]
// QuerySelector()  id:#, etiqueta, clases: .
const titulo = document.querySelector('h1');
// innerText -> Obtener o modificar el texto
titulo.innerText = 'Tienda de Computación';

const carrito = document.querySelector('#carrito');
let cantidad = 10;
carrito.innerText = cantidad;

// innerText vs innerHTML
const area = document.querySelector('#area');

area.innerHTML += '<p>Esto es una área dinamica</p>';
area.innerHTML += '<p class="span-rojo"> mensaje</p>';
area.innerHTML += '<p class="span-rojo"> Otro mensaje</p>';

area.innerHTML = area.innerHTML + '<p class="span-rojo"> nuevo </p>';

function mostarProducto( producto ){
    const imgFoto = document.querySelector('img');
    const h3Titulo = document.querySelector('h3');
    const h4Precio = document.querySelector('h4');
    // Para modificar un atributos usamos el setAttribute
    imgFoto.setAttribute('src', producto.foto);
    // Para modicar el texto
    h3Titulo.innerText = producto.nombre;
    h4Precio.innerText = '$' + producto.precio;
}


mostarProducto( productos[2]);