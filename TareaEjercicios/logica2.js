var monto,descuento1,descuento2,totalDescuento1,totalDescuento2;
for (let compra = 1; compra <= 10; compra++){
    monto=parseFloat(prompt("Ingrese el monto de la compra"));
    if (monto > 100.0) {
        descuento1=monto*0.10;
        totalDescuento1=monto-descuento1;
        alert("su compra con un monto de $" +monto+ " tiene un descuento del " +descuento1+ "% para pagar con un total de $" +totalDescuento1);
    } else{
        descuento2=monto*0.02;
        totalDescuento2=monto-descuento2;
        alert("su compra con un monto de $"+monto+" tiene un descuento del "+descuento2+"% para pagar con un total de $"+totalDescuento2);
    }
    
}