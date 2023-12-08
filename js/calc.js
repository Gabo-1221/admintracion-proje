const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const bottonIgual = document.getElementsByName('data-igual')[0];
const bottonDelete = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var operaActual = '';
var openAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        
        
    })
});

bottonIgual.addEventListener('click', function(){
    calcular();
    actulizarDisplay();
    
});

bottonDelete.addEventListener('click', function(){
    clear();
    actulizarDisplay();

    
});

function selectOperacion(op){
    if(operaActual === '') return;
    if(openAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    openAnterior = operaActual;
    operaActual = '';
}

function agregarNumero(num){
    operaActual = operaActual.toString() + num.toString();
    actulizarDisplay();
}

function calcular() {
var calculo;
const anterior =  parseFloat(openAnterior);
const actual = parseFloat(operaActual);
if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
            case '+':
                calculo = anterior + actual;
                break;
                
            case '-':
                calculo = anterior - actual;
                break;
                
            case 'x':
                calculo = anterior * actual;
                break;
                
            case '/':
                calculo = anterior / actual;
                break;
            default:
                return;
    }
operaActual = calculo;
operacion = undefined;
openAnterior = '';

}

function clear() {
    operaActual = '';
    openAnterior = '';
    operacion = undefined;
}

function actulizarDisplay() {
    result.value = operaActual;
}

clear();
console.log(result);