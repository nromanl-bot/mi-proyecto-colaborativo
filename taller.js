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

