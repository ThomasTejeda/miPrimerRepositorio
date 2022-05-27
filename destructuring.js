/* Aplicado a objetos literales */

let auto = {
    marca: "Volkswagen",
    modelo:"Vento",
    precio: 5000000,
    km:60000,
    color: "Turquesa",
    anio: 2020,
    patente:"COM017",
    vendido: true   
}


let {color:pintura,anio,km,marca,modelo,patente,precio,vendido} = auto
console.log(pintura); /* Se llama a "pintura" que proviene de *color*/

/* Aplicado a arrays */

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let bariloche = destinosDelMundo[1];
let china = destinosDelMundo[3];
console.log(bariloche,china);
