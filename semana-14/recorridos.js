// Selecciono todos los elementos
const sPagados = document.querySelector('#sPagados');
const sPendientes = document.querySelector('#sPendientes');
const form = document.querySelector('form');
const inputDetalle = document.querySelector('#detalle');
const inputValor = document.querySelector('#valor');
const uLista = document.querySelector('#uLista');
// Variables
let pagados = 0;
let pendientes = 0;
let pagos = [
    { detalle: 'Luz', valor: 12000, pagado: true},
    { detalle: 'Gas', valor: 20000, pagado: false},
    { detalle: 'Aysa', valor: 10000, pagado: true}
];

function mostrarPagados(cantidad){
    sPagados.innerText = cantidad;
}

function mostrarPendientes(cantidad){
    sPendientes.innerText = cantidad;
}

function mostrarPagos(lista){
    uLista.innerHTML = "";
    for(let i=0; i < lista.length; i++){
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        const span = document.createElement('span');
        const btnEliminar = document.createElement('button');
        const btnPagar = document.createElement('button');
        
        const detalle = lista[i].detalle;
        const valor = lista[i].valor;
        const pagado = lista[i].pagado;

        if( pagado == false){
            strong.style.color = 'tomato';
        } else {
            strong.style.color = 'teal';
        }

        strong.innerText = detalle; 
        btnEliminar.textContent = '❌';
        btnPagar.textContent = '✅'
        span.innerText = valor;

        li.appendChild(strong);
        li.appendChild(btnEliminar)
        li.appendChild(btnPagar);
        li.appendChild(span);
        uLista.appendChild(li);
    }

    calcular(pagos);
}

//  <li> <strong>Gas</strong>  <span>$45.000</span> </li>
function agregarPago(evento){
    evento.preventDefault();
    const detalle = inputDetalle.value.trim();
    const valor = Number(inputValor.value.trim() );

    pagos.push({
        detalle: detalle,
        valor: valor,
        pagado: false
    });

    inputDetalle.value = "";
    inputValor.value = "";
    mostrarPagos(pagos)
}   

form.addEventListener('submit', agregarPago)

function calcular(lista){
    pagados = 0;
    pendientes = 0;
    for(let i=0; i<lista.length; i++){
        const pagado = lista[i].pagado;
        if( pagado == true){
            pagados = pagados + 1;
        } else {
            pendientes = pendientes +1
        }
    }
    mostrarPagados(pagados);
    mostrarPendientes(pendientes);
}

mostrarPagos(pagos);