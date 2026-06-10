const inputNombre = document.querySelector('#inputNombre');
const btnAgregar = document.querySelector('#btnAgregar');
const ulLista = document.querySelector('#ulLista');
const spanError = document.querySelector('.error');

function agregarProducto(){
    const textProducto = inputNombre.value.trim();
    // Valido campos completo
    if( textProducto == ""){
        const p = document.createElement('p');
        p.innerText = 'Por favor, completo los campos'
        spanError.appendChild(p )
    }
    const li = document.createElement('li');
    li.innerText = textProducto;

    ulLista.appendChild(li);
}

function eliminarError(){
    spanError.innerHTML = "";
}
btnAgregar.addEventListener('click', agregarProducto);
inputNombre.addEventListener('input', eliminarError);