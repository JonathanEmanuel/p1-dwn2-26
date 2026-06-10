
let i= 12;
// Bucle Abierto, que se evalua la condición antes de ejecutarse
while ( i < 10 ) {
    document.writeln("<p>Ana</p>");
    i = i + 1;
}
// Bucle Abierto, se ejecuta al menos una vez y luego se evalua la condición
do {
    document.writeln("<p>Zoe</p>");
    i = i + 1;

}  while( i < 10 );

// Ejemplos de Aplicación
// Creamos un programa que solicite productos y la confirmacion de cargar, hasta que el usuario cancele la carga de datos

let confirmacion;
let producto;
do {
    confirmacion = confirm('¿Cargar Productos?');
    if( confirmacion == true){
        producto = prompt('Ingrese el Productos:');
        document.writeln("<p>Productos: " + producto +"</p>");
    }

} while( confirmacion == true);

/*
let confirmacion;
let producto;

confirmacion = confirm('¿Cargar Productos?');
while( confirmacion == true ) {
    producto = prompt('Ingrese el Productos:');
    document.writeln("<p>Productos: " + producto +"</p>");
    confirmacion = confirm('¿Cargar Productos?');
}
*/

// Bucle Cerrado
for(let j=0; j<10; j++ ){
    document.writeln("<p>Productos: XXXX</p>");
}

