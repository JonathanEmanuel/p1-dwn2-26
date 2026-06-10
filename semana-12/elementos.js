const padre = document.querySelector('section');


// Creamos un elemento en memoria;
const card = document.createElement('span');
card.innerText = 'Producto 1';

// Agregamos el elemento como hijo del padre
padre.appendChild(card);


console.log( padre);
console.log( card);

padre.innerHTML += '<span> Prducto 2</span>';

const lista = ['Fideos', 'Tomates', 'Harina', 'Leche'];
// Rercorre el array y crear los elementos en el DOM
let i = 0;
/*
while(i < lista.length){
    const nombre = lista[i];
    const card = document.createElement('span');
    card.innerText = nombre;
    padre.appendChild(card);
    i++;
}
*/
while(i < lista.length){
    const nombre = lista[i];
    padre.innerHTML += `<span> ${i} - ${nombre} </span>`;
``
    i++;
}
