const inputBuscar = document.querySelector('#inputBuscar');
const selectCategoria = document.querySelector('#selectCategoria');
const selectOrdenar = document.querySelector('#selectOrdenar');
const sectionProductos = document.querySelector('#sectionProductos');


const productos = [
    { id:1, nombre: 'Mouse', precio: 45000, foto: 'images/mouse.jpg'},
    { id:2, nombre: 'Mouse Logitech', precio: 75000, foto: 'images/mouse.jpg'},

    { id:3, nombre: 'Monitor', precio: 500000, foto: 'images/monitor.jpg'},
    { id:4, nombre: 'Teclado', precio: 65000, foto: 'images/teclado.jpg'},
    { id:5, nombre: 'Teclado Logitech', precio: 45000, foto: 'images/teclado.jpg'},

];

// Renderizar Productos
function renderizarProductos( productos){
    sectionProductos.innerHTML = "";
    for( let i=0; i < productos.length; i++){
        const producto = productos[i];
        const divCard = document.createElement('div');
        divCard.classList.add('card');

        const divCardIMG = document.createElement('div');
        divCardIMG.classList.add('card-img');
        divCard.appendChild(divCardIMG)

        const img = document.createElement('img');
        img.setAttribute('src', producto.foto);
        img.setAttribute('alt', producto.nombre);
        divCardIMG.appendChild(img);

        const h3 = document.createElement('h4');
        h3.textContent = producto.nombre;

        const h4 = document.createElement('h4');
        h4.textContent = producto.precio;
        divCard.appendChild(h3);
        divCard.appendChild(h4);

        const aBtn = document.createElement('a');
        aBtn.setAttribute('href', 'detalle.html?id=' +producto.id);
        aBtn.classList.add('btn')
        aBtn.textContent = 'Ver'

        divCard.appendChild(aBtn);
        sectionProductos.appendChild(divCard);
    }
}

// Filtrar Productos
function filtrarProductos() {
    const texto = inputBuscar.value;
    const arrayAux = [];
    for(let i=0; i< productos.length; i++){
        const producto = productos[i];
        if( producto.nombre.toLowerCase().includes(texto.toLowerCase())){
            arrayAux.push(producto);
        } 
        /*
        if( producto.nombre.toLowerCase() == texto.toLowerCase()){
            arrayAux.push(producto);
        } 
        */
    }
    // console.log(arrayAux);
    renderizarProductos(arrayAux);
}
// Ordenar Productos

inputBuscar.addEventListener('input', filtrarProductos )


renderizarProductos( productos);