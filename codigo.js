var numero,resultado;
numero=parseInt(prompt("ingrese un numero del 1 al 1000"));
alert (numero);

switch (true) {
    case (numero > 0 && numero < 10):
        resultado = numero*numero;
        alert("su numero es "+resultado);
    break;

    case (numero > 9 && numero < 100):
        resultado = numero*2;
        alert("su numero es "+resultado);
    break;

    case (numero > 99 && numero < 1000):
        resultado = numero-100;
        alert("su numero es "+resultado);
    break;

    default: 
        alert("numeor no valido")
        break;
} 