var nota1,nota2,nota3,promedioNota,faltas,promedioFaltas;
for (let estudiante = 1;estudiante <= 10 ;estudiante ++ ) {
    nota1=parseFloat(prompt("ingrese su primera nota"));
    nota2=parseFloat(prompt("ingrese su segunda nota"));
    nota3=parseFloat(prompt("ingrese su tercera nota"));
    faltas=parseInt(prompt("Ingrese su numero total de faltas"));
    promedioNota=(nota1+nota2+nota3)/3;
    promedioFaltas=(faltas/10)*100;
    if (promedioNota >= 3.0 && promedioFaltas <= 20){
       alert("usted a aprovado la materia")

    } else {
        alert("usted no a aprovado la materia");
        
    }   
}