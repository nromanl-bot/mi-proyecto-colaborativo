//Entrada: leer(edad1), leer(edad2), leer(edad3).
//Proceso: si edad1 > edad2 y edad1 > edad3 entonces escribir edad1
//         sino si edad2 > edad1 y edad2 > edad3 entoces escribir edad2
//         sino escribir edad3 
//Salida:  "El hermano mayor tiene x años."

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
      
//Entrada: leer(N), leer(marca), leer(capacidad), leer(precioBase).
//Proceso: Para i ← 1 hasta N hacer 
//         leer(marca), leer (capacidad), leer(precioBase)
//         si marca = "A" y capacidad = 64 entonces
//            precioFinal ← precioBase + 20 
//         sino si marca = "A" y capacidad = 128 entonces
//              precioFinal ← precioBase + 30
//         sino si marca = "B" y capacidad = 64 entonces
//              precioFinal ← precioBase - 30
//         sino si marca = "B" y capacidad = 128 entonces
//              precioFinal ← precioBase - 50
//         FinSi 
//         Escribir "El precio final del cecular es: ", precioFinal
//         FinPara 
//Salida: "El precio final del celular es: $X."

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
