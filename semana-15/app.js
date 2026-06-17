const inputBuscar = document.querySelector('#inputBuscar');
const selectCategoria = document.querySelector('#selectCategoria');
const selectOrdenar = document.querySelector('#selectOrdenar');
const sectionProductos = document.querySelector('#sectionProductos');

/*
 const productos = [
    { id:1, nombre: 'Mouse 2', precio: 45000, foto: 'images/mouse.jpg'},
    { id:2, nombre: 'Mouse Logitech', precio: 75000, foto: 'images/mouse.jpg'},
    { id:3, nombre: 'Monitor', precio: 12000, foto: 'images/monitor.jpg'},
    { id:4, nombre: 'Teclado', precio: 65000, foto: 'images/teclado.jpg'},
    { id:5, nombre: 'Teclado Logitech', precio: 100, foto: 'images/teclado.jpg'}
];
*/

// Renderizar Productos
function renderizarProductos( productos){
    // Limpiamos el contenedor
    sectionProductos.innerHTML = "";
    // Recorremos el array
    for(let i=0; i < productos.length; i++){
        const producto = productos[i];
        const divCard = document.createElement('div');
        divCard.classList.add('card');

        const btn = document.createElement('a');
        btn.textContent = 'Ver más';
        btn.setAttribute('href', 'detalle.html?id='+producto.id);
        btn.classList.add('btn');

        const divImg = document.createElement('div');
        divImg.classList.add('card-img');

        const img = document.createElement('img');
        img.setAttribute('alt', producto.nombre);
        img.setAttribute('src', producto.foto);

        divImg.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = producto.nombre;

       const h3 = document.createElement('h3');
        h3.textContent = '$ ' + producto.precio;


        divCard.appendChild(divImg);
        divCard.appendChild(h3);
        divCard.appendChild(h4);

        divCard.appendChild(btn);

        sectionProductos.appendChild(divCard);
    }
}

// Filtrar Productos
function filtrarProductos() {
    const texto = inputBuscar.value.toLowerCase();
    const listaAux = productos.filter( p => p.nombre.includes(texto) );
    renderizarProductos(listaAux);
}
// Ordenar Productos
function ordenarPorPrecio(){
    const critero = selectOrdenar.value;
    let listaAux = productos;
    if( critero == 'menor'){
        listaAux.sort( (a, b) => a.precio - b.precio );
/*         listaAux.sort( (a, b) => {
            return a.precio - b.precio
        }) */
    } else if ( critero == 'mayor'){
        listaAux.sort( (a, b) => b.precio - a.precio );

    }

    renderizarProductos(listaAux);
}
renderizarProductos(productos);
inputBuscar.addEventListener('input', filtrarProductos);
selectOrdenar.addEventListener('change', ordenarPorPrecio);