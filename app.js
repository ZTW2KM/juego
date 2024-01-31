let numeroSecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo =10;
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {
        //el usuario no acepto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log (numerogenerado);
    console.log (listanumerossorteados);
    if (listanumerossorteados.length == numeromaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else {


         if (listanumerossorteados.includes(numerogenerado)) {
         return generarNumeroSecreto();
         }   else {
         listanumerossorteados.push(numerogenerado);
         return numerogenerado;
         }
    }
}

function condicionesiniciales (){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales ();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesiniciales ();