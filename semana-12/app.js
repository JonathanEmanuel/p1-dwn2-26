// Selector por etiqueta
const titulo = document.querySelector('h1');
// Selector por ID
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');
// Selector por clase --> El primer elemento que corresponde con la clase
const box = document.querySelector('.box');
// Selecciono todos y obtendo un nodeList
const boxs = document.querySelectorAll('.box');

titulo.innerText = 'Semana 11';
box1.innerHTML = '<h4> 0 </h4>';
box1.style.backgroundColor = 'tomato';
box2.style.height = '240px';
box3.style.borderRadius = '100px';

boxs[0].innerHTML = '<h4> ? </h4>';
boxs[1].innerHTML = '<h4> ? </h4>';
boxs[2].innerHTML = '<h4> ? </h4>';

