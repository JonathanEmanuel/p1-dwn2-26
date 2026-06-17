const imgProducto = document.querySelector('#imgProducto');
const h2Producto = document.querySelector('#h2Producto');
const h4Producto = document.querySelector('#h4Producto');
const pProducto = document.querySelector('#pProducto');

// Para leer parametros de la URL
const parametro = new URLSearchParams(window.location.search);
const id = parametro.get('id')
console.log( id );

let producto = {}
for(let i=0; i <= productos.length -1; i++){
    if( productos[i].id == id){
        producto = productos[i];
    }
}
console.log(producto)
h2Producto.textContent = producto.nombre
h4Producto.textContent = '$ ' + producto.precio
pProducto.textContent = producto.descripcion
imgProducto.setAttribute('src', producto.foto);