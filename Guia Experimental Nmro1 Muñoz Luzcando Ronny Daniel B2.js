//Ejercicio 2 guia experimental 1
//Entrada: cantidad de grupos y edades de cada grupo.  
//Proceso: recorrer con un ciclo for/while.  
//Salida: para cada grupo, la edad mayor. 


function EdadMayorRepetitiva() { 
   //Entrada(declaracion de variables)
   let ed1=0, ed2=0, ed3=0, a=0, b=0;
   a = parseInt(prompt("Ingrese cantidades a repetir:"));
   while(b < a) { 
     ed1 = parseInt(prompt("Ingresela Primera edad:"));
     ed2 = parseInt(prompt("Ingresela Primera edad:"));
     ed3 = parseInt(prompt("Ingresela Primera edad:"));
     //Proceso:recorrer con un ciclo for/while.
     if ( ed1 > ed2 && ed1 > ed3) {
        alert('El hermano mayor es:${ed1}');
     }else if( ed2 > ed1 && ed2 > ed3){
        alert('El hermano mayor es:${ed2}');
     }else{
        alert('El Hermano mayor es:${ed3}');
     }
     b=b+1
    }
    
          
}
//Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y capacidad: 
//Marca A, 64 GB → +$20. 
//Marca A, 128 GB → +$30. 
//Marca B, 64 GB → –$30. 
//Marca B, 128 GB → –$50. 
//Determinar el precio final de un celular vendido. 

//Version de(ARREGLOS)
//Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los precios finales de cada celular. 
function PreciofinaldeCelulares{
  //Entrada(declaracion de variables)
  let PBase= parseInt(prompt("ingrese el precio base del celular:"));
  let Marca= ["A","B","A","B"];
  let Cap = [64, 128, 128, 64];
  let Pfinal= [];
  //Proceso: Creacion de los arreglos
  for(let i = 0; i < Marca.length; i++) {
    let Pfinal1 = PBase;

    if (Marca[i] === "A" && Cap[i] === 64) {
         Pfinal += 20;
     } else if (Marca[i] === "A" && Cap[i] === 128) {
         Pfinal += 30;
     } else if (Marca[i] === "B" && Cap[i] === 64) {
         Pfinal += 30;
     } else if (Marca[i] === "B" && Cap[i] === 128) {
         Pfinal += 50;
     }

     Pfinal.push(Pfinal1);
     }
    //Salida: Impresion de arreglos
   console.log("Marcas:",Marca);
   console.log("Capacidades:",Cap);
   console.log("Precios Finales:",Pfinal);
}

//Aplicacion de cobro streaming(Version Condicional)
function SuscripcionServicioStreamingVerCondicional{
    //Entrada(Declaracion de variable)
    let usu = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    let CPorUsu = 0;
    let CTotal = 0;
    //Proceso: Calculo de costo total y Costo por usuario
    if (usu >= 100){
        CPorUsu = 5;
        CTotal = CPorUsu*usu;
    }else if (usu >= 50 && usu <= 90){
        CPorUsu = 6;
        CTotal = CPorUsu*usu;
    }else if ( usu >= 30 && usu <= 49){
        CPorUsu = 8;
        CTotal = CPorUsu*usu;
    }else if ( usu < 30 ){
        CTotal = 300;
        CPorUsu = CTotal/usu;
    }
    //Salida: Impresion de Costo total y Costo por usuario
    console.log("Costo total: $" + CTotal)
    console.log("Costo por Usurio: $" + CPorUsu)


     
 }