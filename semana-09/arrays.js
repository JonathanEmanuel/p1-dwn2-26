//                0       1       2         3
let equipos = ['Boca', 'River', 'Velez', 'Independiente'];
// Lo Agrego mal
equipos[4] = 'Hurcan';


document.write('<p>' + equipos[0] + '</p>');
document.write('<p>' + equipos[1] + '</p>');
// Lo actualizo
equipos[4] = 'Huracan';

console.log( equipos.length);
// Para Agregar elementos
equipos.push('Racing');

console.table(equipos);

for(let i=0; i <equipos.length; i++ ){
    document.write('<p>' + equipos[i] + '</p>');
}
/* ---------------------------- Objetos Literales --------------------------- */

let persona = {
    nombre: 'Ana',
    edad: 25
}

let persona2 = {
    nombre: 'Lucas',
    edad: 27
}
// Agregamos el atributo
persona.email = 'ana@emae.edu.ar';
persona.edad = 30;

    document.write('<p>Nombre: ' + persona.nombre + '</p>');
    document.write('<p>Edad: ' + persona.edad + '</p>');
    document.write('<p>Email: ' + persona.email + '</p>');


const estudiantes = [
    { nombre: 'Ana', edad: 21 },  // 0
    { nombre: 'Luz', edad: 25 },  // 1
    { nombre: 'Zoe', edad: 31 },  // 2
    { nombre: 'Pia', edad: 21 }  // 3
];

document.write('<hr>');

    document.write('<p>Nombre: ' + estudiantes[1].nombre + ' | Edad: ' + estudiantes[1].edad  +'</p>');
    document.write('<p>Nombre: ' + estudiantes[2].nombre + ' | Edad: ' + estudiantes[2].edad  +'</p>');





