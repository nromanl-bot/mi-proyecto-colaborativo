//1. Versión condicional:
//Se registran las edades de tres hermanos. El algoritmo debe determinar quién es el
//mayor de los tres, mostrando la edad correspondiente.
function mayorDeEdad(){ 
    let edad1=0, edad2=0, edad3=0;
    edad1= parseInt(prompt("Ingrese la primera edad:"));
    edad2= parseInt(prompt("Ingrese la segunda edad:"));
    edad3= parseInt(prompt("Ingrese la tercera edad:"));
    if(edad1>edad2 && edad1>edad3){
        alert("La mayor edad es:" + edad1);
    }else if(edad2>edad1 && edad2>edad3){
        alert("La mayor edad es:" + edad2);
    }else{
        alert("La mayor edad es:" + edad3)
    }
    }
      mayorDeEdad(); 
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
      /*5. Versión repetitiva:
La empresa recibe N pedidos. Para cada pedido, leer la cantidad de tarjetas y calcular
el costo total aplicando las mismas reglas.*/
function costoPediInvi(){
    let cont=0, pre=0, ctotal=0, c=0;
    let n=parseInt(prompt("Ingrese cantidad de pedidos"));
    while(c<n){
        cant=parseInt(prompt("Ingrese cantidad de tarjetas:"));
        if(cant<=200){
            pre=2;
        }else if(cant>=201 && cant<=300){
            pre=1.80;
        }else{
            pre=1.50;
        }
        ctotal=cant*pre;
        console.log(`"El costo total es de: $${ctotal}"`);
        c=c+1
    }
}debugger;
costoPediInvi()

/*6. Versión con arreglos:
Guardar en un arreglo las cantidades de tarjetas de N pedidos. Calcular en un arreglo
paralelo el costo total de cada pedido.*/
function costoPediInviArre(){
    let cant=0, pre=0, ctotal=0;
    let n=parseInt(prompt("Ingrese cantidad de pedidos"));
    let cantidades=[], costos=[];
    for(let i=0; i<n; i++){
        cant=parseInt(prompt("Ingrese cantidad de tarjetas:"));
        cantidades.push(cant);
        if(cant<=200){
            pre=2;
        }else if(cant>=201 && cant<=300){
            pre=1.80;
        }else{
            pre=1.50;
        }
        ctotal=cant*pre;
        costos.push(ctotal);
        console.log(`"Pedido ${i+1},costo total es de: $${costos[i]}"`);
    }
}debugger;
costoPediInviArre()

//Ejercicio 8 Versión repetitiva:
//La tienda vende N celulares. Para cada uno se ingresan marca y capacidad, y se calcula
//el precio final con las reglas anteriores.
function calcularPrecioCelulares() {
    for (let i = 0; i < n; i++) {
    const {marca, capacidad, precioBase } = celulares[i];
    let precioFinal = precioBase;
    if (marca === "A" && capacidad === 64) {
        precioFinal += 20;
    } else if (marca === "A" && capacidad === 128) {
        precioFinal += 30;
    } else if (marca === "B" && capacidad === 64) {
        precioFinal -=30;
    } else if (maca === "B" && capacidad === 123) {
        precioFinal -= 50;
    }
    console.log(`El precio final del celular es: $${precioFinal}`);
    }
}
     calcularPrecioCelulares();

 //Ejercicio 9 Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y capacidad: 
//Marca A, 64 GB → +$20. 
//Marca A, 128 GB → +$30. 
//Marca B, 64 GB → –$30. 
//Marca B, 128 GB → –$50. 
//Determinar el precio final de un celular vendido. 

//Version de(ARREGLOS)
//Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los precios finales de cada celular. 
function PreciofinaldeCelulares(){
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

//Ejercico 10 Aplicacion de cobro streaming(Version Condicional)
function SuscripcionServicioStreamingVerCondicional(){
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

 /*12. Versión con arreglos:
Guardar en un arreglo la cantidad de usuarios de cada grupo y en otro arreglo el costo
total calculado. Mostrar además en un arreglo paralelo el costo por usuario.*/
function supGruStreArre(){
    let usu=0, pre=0, ctotal=0;
    let g=parseInt(prompt("Ingrese cantidad de grupos: "));
    let usuarios=[], costos=[], costocu=[];
    for(let i=0; i<g; i++){
        usu=parseInt(prompt("Ingrese cantidad de usuarios: "));
        usuarios.push(usu);
        if(usu>=100){
            pre=5;
        }else if(usu>=50 && usu<=99){
            pre=6;
        }else if(usu>=30 && usu<=49){
            pre=8;
        }else{
            pre=300;
        }
        costocu.push(pre);
        ctotal=g*pre;
        costos.push(ctotal);
        console.log(`"Grupo ${i+1} con ${usuarios[i]} usuarios, c/u: $${costocu[i]}, costo total de: $${costos[i]}"`);
    }
}debugger;

supGruStreArre()