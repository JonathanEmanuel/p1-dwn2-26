const sTotal = document.querySelector('#sTotal');
const form = document.querySelector('form');
const inputNombre = document.querySelector('#inputNombre');
const inputPrecio = document.querySelector('#inputPrecio');
const ulLista = document.querySelector('#ulLista');
const spanError = document.querySelector('.error');


let total = 0;
let lista = [];
/* ----------------- FUNCIÓN 1 - Leer los valores de los input y agrege el producto al array ----------------- */
function agregarProducto(evento){
    evento.preventDefault();
    const nombre = inputNombre.value.trim();
    const precio = Number(inputPrecio.value.trim());
    // Validamos el nombre
    if( nombre == ""){
        mostarError('Por favor, complete el Nombre');
        return;
    }
    if( nombre.length < 4){
        mostarError('Por favor, el Nombre debe ser de al menos cuatro caracteres');
        return;
    }
    // Validamos el Precio
    if( precio == ""){
        mostarError('Por favor, complete el Precio');
        return;
    }

    if( precio <= 0){
        mostarError('El precio debe ser mayor que cero');
        return;
    }

    // Creamos un objeto Literal
    lista.push({ 
        nombre: nombre, 
        precio: precio
    });
    // Limpiamos los inputs
    inputNombre.value = "";
    inputPrecio.value = "";

    // Incrementamos el total
    total = total + precio;
    mostrarTotal(total);
    
    mostrarProductos(lista);

    eliminarError();
}
/* ---------------- FUNCIÓN 2 - Recibe el array y crea las ul --------------- */
function mostrarProductos(lista){
    // Limpiamos el contenedor UL
    ulLista.innerHTML = "";
    
    // Recorremos el array y creamos las <li>
    for(let i=0; i < lista.length; i++){
        const producto = lista[i];
        const li = document.createElement('li');
        const span = document.createElement('span');
        const strong = document.createElement('strong');

        span.innerText = producto.nombre;
        strong.innerText = producto.precio;

        li.appendChild(span);
        li.appendChild( strong);

        ulLista.append(li);
    }
}

/* ------------- FUNCIÓN 3 - Recibe el array y retorna el total ------------- */
function mostrarTotal(total){
    sTotal.innerText = total;
}
/* ------------------------ FUNCIÓN 4 - Mostrar Error ----------------------- */
function mostrarError( mensaje){
    eliminarError();
    const p = document.createElement('p');
    p.innerText = mensaje;
    spanError.appendChild(p )
}
/* ------------------------ FUNCIÓN 5 - Elimina Error ----------------------- */

function eliminarError(){
    spanError.innerHTML = "";
}


form.addEventListener('submit', agregarProducto);
inputNombre.addEventListener('focus', eliminarError);
inputPrecio.addEventListener('focus', eliminarError);
