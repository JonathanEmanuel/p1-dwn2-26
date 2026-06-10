const contenedor = document.querySelector('#contenedor');
const cantidad = document.querySelector('#cantidad');

const img = document.querySelector('img');

const btn1 = document.querySelector('#btn1');
const btnLike = document.querySelector('#btn-like');
const sLike = document.querySelector('#like');
const btnCambiar = document.querySelector('#btn-cambiar');

const inputNombre = document.querySelector('#inputNombre');
const pre = document.querySelector('pre');

let contadorLikes = 0;

function mostrarTexto () {
    const textoNombre = inputNombre.value.trim();
    console.log(textoNombre)
    pre.innerText = textoNombre;
}

function darLike(){
    contadorLikes = contadorLikes + 1;
    cantidad.innerText = contadorLikes;
}

function agregarPersona(nombre){
    const pNombre = document.createElement('p');
    pNombre.innerText = nombre;
    contenedor.appendChild(pNombre)
}

function cambiarImg(){
    if( imgURL == 'images/js.png'){
        // Para cambiar un atribulo
        img.setAttribute('src', 'images/html.png');
        btnCambiar.innerText = 'Deshacer';
        imgURL = 'images/html.png';
    } else {
        img.setAttribute('src', 'images/js.png');
        btnCambiar.innerText = 'Cambiar';
        imgURL = 'images/js.png';
    }

}

inputNombre.addEventListener('input', mostrarTexto)


agregarPersona('Carlos');
agregarPersona('Julieta');
agregarPersona('José');
agregarPersona('Rocio');

btnLike.addEventListener('click', darLike);
sLike.addEventListener('click', darLike);
btn1.addEventListener('click', () => {
    const h4 = document.createElement('h4');
    h4.innerText = '🍎';
    contenedor.appendChild( h4);
});

let imgURL = 'images/js.png';

function cambiarImg(){
    if( imgURL == 'images/js.png'){
        // Para cambiar un atribulo
        img.setAttribute('src', 'images/html.png');
        btnCambiar.innerText = 'Deshacer';
        imgURL = 'images/html.png';
    } else {
        img.setAttribute('src', 'images/js.png');
        btnCambiar.innerText = 'Cambiar';
        imgURL = 'images/js.png';
    }

}


btnCambiar.addEventListener('click', cambiarImg);
