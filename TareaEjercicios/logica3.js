var num1,num2,numTotal;
for (let num = 1; num <= 10; num++) {
    num1=parseFloat(prompt("ingrese su primer numero"));
    num2=parseFloat(prompt("ingrese su segundo numero"));
    switch (true) {
        case (num1>num2):
            numTotal=num1+num2;
            alert("su numero resultante es "+numTotal);
            break;
        case (num1<num2):
            numTotal=(num1*num1)+(num2*num2);
            alert("su numero resultante es "+numTotal);
            break;
        case (num1==num2):
            alert("los numeros son iguales");
            break;
        default:
            break;
    }
}