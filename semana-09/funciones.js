// Variable Global
let edad = 21;
// Definición de función
function saludar(){
    let nombre = 'Juan';  // Variables Locales
    alert('Hola ' + nombre + ' 👋 tenes ' + edad );
}

// Invocación de la funación
// saludar();
// Función con parametro
function saludar2( nombre ){
    alert('Hola ' + nombre + ' 👋');
}

// Llamado de la función con un parametro
//saludar2('Ana');
//console.log(edad);
// Parametro es lo que le da sentido de vida la Función
function precioFinal(precio){
    let iva = precio*0.21;
    let final = precio + iva;
    // Retorno el la última acción que hace la función antes de expirar
    return final;
}

let precio = 450;
let pfinal = precioFinal(precio);
    document.writeln("<p>Precio de Lista: 4" + precio + "</p>");
    document.writeln("<p>Precio final: $"+ pfinal + "</p>");
