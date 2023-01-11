function deMedidaAMKS(x, k){
    return x * k;
}

function deMKSAMedida(x, k){
    return x / k;
}

const longitud = {
    mm: { value: 0.001, nombre: 'Milimetros', i:0},
    cm: { value: 0.01, nombre: 'Centimetros', i:1},
    mts: { value: 1, nombre: 'Metros', i:2},
    km: { value: 1000, nombre: 'Kilometros', i:6},
    plg: { value: 0.0254, nombre: 'Pulgadas', i:3},
    ft: { value: 0.03048, nombre: 'Pies', i:4},
    yd: { value: 0.9144, nombre: 'Yardas', i:5},
    Millas_Terrestres: { value: 1609.34, nombre: 'Millas Terrestres', i:7},
    Millas_Nauticas: { value: 1852, nombre: 'Millas Nauticas', i:8},
}

const masa = {
    gr: { value: 0.001, nombre: 'Gramos'},
    kg: { value: 1, nombre: 'Kilogramos'},
    oz: { value: 0.02835, nombre: 'Onzas'},
    lb: { value: 0.4536, nombre: 'Libras'},
    arr: { value: 11.34, nombre: 'Arrobas'},
    ton: { value: 1000, nombre: 'Toneladas'},
    Toneladas_Cortas: { value: 907.19, nombre: 'Toneladas Cortas'},
    Toneladas_Largas: { value: 1016.05, nombre: 'Toneladas Largas'},
}

const tiempo = {
    seg: {value: 1, nombre: 'Segundos'},
    min: { value: 60, nombre: 'Minutos'},
    Horas: { value: 3600, nombre: 'Horas'},
    Dias: { value: 86400, nombre: 'Dias'},
    Meses: { value: 2592000, nombre: 'Meses'},
    Años: { value: 31536000, nombre: 'Años'},
    Lustros: { value: 157680000, nombre: 'Lustros'},
}



let arrayMedidasLongitud = [];
let arrayMedidasMasa = [];
let arrayMedidasTiempo = [];
let mksActual;
let selectMedida;
let selectMedidaOrigen;
let medidaActual;
let resultadoEnMKS;
let resultado;
let medidas;
let konstante;
let konstante1;


function cargarPagina(){


    let botonLongitud = document.getElementById("boton-longitud");
    botonLongitud.addEventListener('click', function() { funcionBotonMedida(longitud, arrayMedidasLongitud)});

    let botonMasa = document.getElementById("boton-masa");
    botonMasa.addEventListener('click', function() { funcionBotonMedida(masa, arrayMedidasMasa)});
    
    let botonTiempo = document.getElementById("boton-tiempo")
    botonTiempo.addEventListener('click', function() { funcionBotonMedida(tiempo, arrayMedidasTiempo)});

    let botonFormulas = document.getElementById('formula');
    botonFormulas.addEventListener('click', formula)
    botonFormulas.style.display = 'none';

    let seccionConvertidor = document.getElementById('seccion-convertidor')
    seccionConvertidor.style.display = 'none';

    

}

function funcionBotonMedida(variable, array){
    array = [];
    let medida;
    let object1 = (Object.keys(variable));

    for (medida of object1){
        array.push(variable[medida].nombre);


    }

    arrayActual = array;
    medidaActual = variable;

    añadirLista(array);
    document.getElementById('boton-convertir').addEventListener('click', convertir);

    let seccionConvertidor = document.getElementById('seccion-convertidor');
    seccionConvertidor.style.display = 'grid';
}




function añadirLista(array){
    let listaMedidas = document.getElementById('lista-medidas');
    let listaMedidasOrigen = document.getElementById('lista-medidas-origen')
    let object1 = (Object.keys(medidaActual));
    listaMedidasOrigen.innerHTML = '',
    listaMedidas.innerHTML = '';

    for (let i = 0; i < array.length; i++){

        let medida = document.createElement('option');
        medida.innerHTML = array[i];
        medida.setAttribute('value', (object1[i]));

        listaMedidas.appendChild(medida);
        medida.setAttribute('name', 'opcion')

    }
    for (let i = 0; i < array.length; i++){
        let medida = document.createElement('option');
        medida.innerHTML = array[i];
        medida.setAttribute('value', (object1[i]));
        listaMedidasOrigen.appendChild(medida);
        medida.setAttribute('name', 'opcion')
    }
}

function convertir(){
    selectMedida = document.getElementById('lista-medidas').value;
    selectMedidaOrigen = document.getElementById('lista-medidas-origen').value;
    let inputNumero = document.getElementById('numero-usuario').valueAsNumber;
    let object1 = (Object.keys(medidaActual));

    let botonFormulas = document.getElementById('formula');
    botonFormulas.style.display = 'block';

    if (Number.isNaN(inputNumero)){
        alert('Inserta un numero valido')
    } else {

        for (medidas of object1) {

            if (medidas === selectMedidaOrigen){


                konstante1 = medidaActual[medidas];

 
                resultadoEnMKS = deMedidaAMKS(inputNumero, konstante1.value);

                break;
            }
        }
    
        for (medidas of object1)   {
            if (medidas === selectMedida){
                konstante = medidaActual[medidas];

                resultado = deMKSAMedida(resultadoEnMKS, konstante.value)
            }   
        }


        crearMensaje(inputNumero, (konstante1.nombre), (resultado.toFixed(2 )), (konstante.nombre))
        let botonIntercambiar = document.getElementById("intercambiar");
        botonIntercambiar.addEventListener('click', intercambiar)
    }
}

function crearMensaje(numeroOrigen, unidadMedidaOrigen, resultado, unidadMedidaFinal){
    let pResultado = document.getElementById('resultado');
    if (resultado == 1){
        unidadMedidaFinal = (unidadMedidaFinal).replace('s', '')
    } 
    if(numeroOrigen == 1){
        unidadMedidaOrigen = unidadMedidaOrigen.replace('s', '')
    }

    pResultado.innerHTML = (`${numeroOrigen} ${unidadMedidaOrigen} equivale a  ${resultado} ${unidadMedidaFinal}`); 
}

function crearMensajeFormula(numeroOrigen, unidadMedidaOrigen, resultado, unidadMedidaFinal){

    let mks;

    if (resultado == 1){
        unidadMedidaFinal.nombre = (unidadMedidaFinal.nombre).replace('s', '')
    } if(numeroOrigen == 1){
        unidadMedidaOrigen.nombre = unidadMedidaOrigen.nombre.replace('s', '')
    }

    if (medidaActual == masa){
        mks = 'Kilogramos'
    } else if (medidaActual == longitud){
        mks = 'Metros'
    }   else{
        mks = 'Segundos'
    }

    let mensaje1 = (`${numeroOrigen} ${unidadMedidaOrigen.nombre} x ${konstante1.value} = ${resultadoEnMKS} ${mks}`);
    let mensaje2 = (`\n ${resultadoEnMKS} ${mks} ÷ ${konstante.value} = ${resultado} ${unidadMedidaFinal.nombre}`); 


    return(mensaje1 + mensaje2)
    
}


function intercambiar(){
    let inputNumero = document.getElementById('numero-usuario');

    crearMensajeFormula(resultado, (konstante.nombre), inputNumero.value, (konstante1.nombre))
    inputNumero.value = resultado;


}

function formula() {
    let inputNumero = document.getElementById('numero-usuario').value;
    let mensaje1 = crearMensajeFormula(inputNumero, (konstante1), (resultado), (konstante));

    alert(mensaje1)

}

window.addEventListener("load", cargarPagina);





