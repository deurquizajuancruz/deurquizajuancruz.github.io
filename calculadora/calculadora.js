function operacion() {
    return document.getElementById('operacion').innerHTML != '';
}

function resultado() {
    return document.getElementById('resultado').innerHTML != '';
}

function escribirNumero(num) {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    if (resultado()) { // si ya hay resultado
        borrar();
        op1.innerHTML += num;
    }
    else if (!operacion()) { // si no hay operacion
        if (op1.innerHTML != '0') { // si el primer numero es 0, no hay que escribir mas numeros
            op1.innerHTML += num;
        }
        else if (num != 0) {
            op1.innerHTML = num;
        }
    }
    else { // si ya hay operacion y primer numero pero no segundo
        if (op2.innerHTML != '0') {
            op2.innerHTML += num;
        }
        else if (num != 0) {
            op2.innerHTML = num;
        }
    }
}

function borrar() {
    ['op1', 'op2', 'operacion', 'resultado'].forEach(x => document.getElementById(x).innerHTML = '');
}


function escribirOperador(valor) {
    if (document.getElementById('op1').innerHTML != '') { // si ya hay un numero
        document.getElementById('operacion').innerHTML = valor;
    }
}

const operaciones = {
    '+': (operando1, operando2) => operando1 + operando2,
    '-': (operando1, operando2) => operando1 - operando2,
    '*': (operando1, operando2) => operando1 * operando2,
    '/': (operando1, operando2) => operando1 / operando2,
    '%': (operando1, operando2) => operando2 === 0 ? 'No calculable' : operando1 % operando2
};

function calcular() {
    const operacionFunc = operaciones[document.getElementById('operacion').innerHTML];
    document.getElementById('resultado').innerHTML = operacionFunc(Number(document.getElementById('op1').innerHTML), Number(document.getElementById('op2').innerHTML));
}

function negar() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    if (op2.innerHTML != '') {
        op2.innerHTML = -op2.innerHTML;
    }
    else if (op1.innerHTML != '') {
        op1.innerHTML = -op1.innerHTML;
    }
}

function borrarNumero() {
    const resultado = document.getElementById('resultado');
    const op2 = document.getElementById('op2');
    const op1 = document.getElementById('op1');
    const operacion = document.getElementById('operacion');
    if (op2.innerHTML != '') {
        op2.innerHTML = op2.innerHTML.substring(0, op2.innerHTML.length - 1);
        resultado.innerHTML = '';
    }
    else if (operacion.innerHTML != '') {
        operacion.innerHTML = '';
        resultado.innerHTML = '';
    }
    else if (operacion.innerHTML == '' && op1.innerHTML != '') {
        op1.innerHTML = op1.innerHTML.substring(0, op1.innerHTML.length - 1);
        resultado.innerHTML = '';
    }
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operaciones2 = ['+', '-', '*', '/', '%'];

document.addEventListener('keydown', (event) => {
    for (let i = 0; i < numeros.length; i++) {
        if (event.key === numeros[i].toString()) {
            escribirNumero(numeros[i]);
            break;
        }
    }
    for (let i = 0; i < operaciones2.length; i++) {
        if (event.key === operaciones2[i]) {
            escribirOperador(operaciones2[i]);
            break;
        }
    }
    switch (event.key) {
        case 'Enter':
        case '=':
            calcular();
            break;
        case 'Delete':
            borrar();
            break;
        case 'Backspace':
            borrarNumero();
            break;
    }
}
);