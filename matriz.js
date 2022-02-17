//MATRIZ EN ESPIRAL

let pregutanUsuario = prompt("Coloque el tamaño que quiera que sea la MATRIZ");
//variable de inicio
let inicio = 0;
//variable -1
let numeroLimite = pregutanUsuario  -1;
//variable contador
let contador  = 1;


let matrizEspiral = new Array(pregutanUsuario );

for(i=0; i<=pregutanUsuario ; i++){
    matrizEspiral[i] = new Array(pregutanUsuario )
}

for(i=0; i<pregutanUsuario ; i++){

    for(x=0;x<pregutanUsuario ;x++){
       matrizEspiral[i][x] =0

    }
  
}


//matriz elevada a la 2
while(contador <=(Math.pow(pregutanUsuario ,2)) ){
    //FILA DEL 1 AL 5
    for(x=inicio; x<=numeroLimite; x++){
        matrizEspiral[inicio][x] = contador;
        contador++;
    }
    //del 6 al 9
    for(x = inicio+1; x <=numeroLimite; x++){
        matrizEspiral[x][numeroLimite] = contador;
        contador++;
    }
    //10 al 13
    for(x = numeroLimite-1; x>=inicio; x--){
        matrizEspiral[numeroLimite][x] = contador;
        contador++;
    }
    //14 al16
    for(x = numeroLimite-1; x>=inicio+1; x--){
        matrizEspiral[x][inicio] =contador;
        contador++;
    }

    inicio = inicio + 1;
    numeroLimite = numeroLimite -1;

}

document.write("<table>");
for(i=0; i<pregutanUsuario ; i++){
    document.write("<tr>")
    for(x=0;x<pregutanUsuario ;x++){
        document.write("<td>" + matrizEspiral[i][x]  + "</td>")

    }
    document.write("</tr>")
}
document.write("</table>")