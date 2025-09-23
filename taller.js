//Bloque 1: Edad mayor entre hermanos
/*1. Versión condicional:
Se registran las edades de tres hermanos. El algoritmo debe determinar quién es el
mayor de los tres, mostrando la edad correspondiente.
o Entrada: tres enteros (edades).
o Proceso: usar condiciones múltiples para comparar.
o Salida: “El hermano mayor tiene X años.” */
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

/*2. Versión repetitiva:
Se registran N grupos de tres hermanos. Para cada grupo, el programa debe
determinar quién es el mayor y mostrarlo en pantalla.*/
function EdadMayorRepetitiva() { 
   let ed1=0, ed2=0, ed3=0, a=0, b=0;
   a = parseInt(prompt("Ingrese cantidades a repetir:"));
   while(b < a) { 
     ed1 = parseInt(prompt("Ingresela Primera edad:"));
     ed2 = parseInt(prompt("Ingresela Primera edad:"));
     ed3 = parseInt(prompt("Ingresela Primera edad:"));
     if ( ed1 > ed2 && ed1 > ed3) {
        alert('El hermano mayor es:${ed1}');
     }else if( ed2 > ed1 && ed2 > ed3){
        alert('El hermano mayor es:${ed2}');
     }else{
        alert('El Hermano mayor es:${ed3}');
     }
     b=b+1
    }       
}debugger;
EdadMayorRepetitiva()

/*3. Versión con arreglos:
Guardar en un arreglo de 3 posiciones las edades de los hermanos y recorrer el arreglo
para determinar la mayor edad.*/
function mayor() {
    let edad = [""]
    edad[0] = parseIntprompt("Ingrese la edad")
    edad[1] = parseIntprompt("Ingrese la edad")
    edad[2] = parseIntprompt("Ingrese la edad")
    if (edad[0] > edad[1] && edad[0] > edad[2]) {
    console.log("La edad mayor es: " + edad[0])
    } else if (edad[1] > edad[0] && edad[1] > edad[2]) {
    console.log("La edad mayor es: " + edad[1])
    } else if (edad[2] > edad[0] && edad[2] > edad[1]) {
    console.log("La edad mayor es: " + edad[2])
    }
}debugger;
mayor()

//Bloque 2: Costo de pedidos de invitaciones
/*4. Versión condicional:
Una empresa de impresión ofrece tarjetas de invitación:
o Pedido ≤ 200 → $2.00 c/u.
o Entre 201 y 300 → $1.80 c/u.
o Más de 300 → $1.50 c/u.
Calcular el costo total de un pedido.*/
function tarjetas() {
    let nPedido = parseIntprompt("Ingrese cantidad de tarjetas")
    let pUnidad = 0
    let total = 0
    if (nPedido <= 200) {
    pUnidad = 2
    } else if (nPedido > 200 && nPedido <= 300) {
    pUnidad = 1.8
    } else (nPedido > 300) { 
    pUnidad = 1.6
    }
    total = nPedido * pUnidad
    console.log("El total a pagar es: " + total)
}debugger;
tarjetas()


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

//Bloque 3: Precio final de celulares vendidos
/*7. Versión condicional:
Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y
capacidad:
o Marca A, 64 GB → +$20.
o Marca A, 128 GB → +$30.
o Marca B, 64 GB → –$30.
o Marca B, 128 GB → –$50.
Determinar el precio final de un celular vendido.*/


/*8. Versión repetitiva:
La tienda vende N celulares. Para cada uno se ingresan marca y capacidad, y se calcula
el precio final con las reglas anteriores.*/
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
        }else if (maca === "B" && capacidad === 123) {
        precioFinal -= 50;
        }
    console.log(`El precio final del celular es: $${precioFinal}`);
    }
}debugger;
calcularPrecioCelulares()

/*9. Versión con arreglos:
Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los
precios finales de cada celular.*/
function PreciofinaldeCelulares(){
  let PBase= parseInt(prompt("ingrese el precio base del celular:"));
  let Marca= ["A","B","A","B"];
  let Cap = [64, 128, 128, 64];
  let Pfinal= [];
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
   console.log("Marcas:",Marca);
   console.log("Capacidades:",Cap);
   console.log("Precios Finales:",Pfinal);
}debugger;
PreciofinaldeCelulares()

//Bloque 4: Suscripciones grupales de streaming
/*10. Versión condicional:
Una aplicación de streaming cobra según número de usuarios:
• ≥100 usuarios → $5 c/u.
• 50–99 usuarios → $6 c/u.
• 30–49 usuarios → $8 c/u.
• <30 usuarios → $300 fijos.
Calcular el costo total y el costo por usuario para un grupo.*/
let usu = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    let CPorUsu = 0;
    let CTotal = 0;
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
    console.log("Costo total: $" + CTotal)
    console.log("Costo por Usurio: $" + CPorUsu)    
 }

/*11. Versión repetitiva:
La aplicación recibe N solicitudes de grupos. Para cada uno, calcular el costo total y el
costo por usuario aplicando las mismas reglas.*/
function SuscripcionServicioStreamingVerCondicional(){
    let usu = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    let CPorUsu = 0;
    let CTotal = 0;
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
    console.log("Costo total: $" + CTotal)
    console.log("Costo por Usurio: $" + CPorUsu)
}debugger;
SuscripcionServicioStreamingVerCondicional()

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

