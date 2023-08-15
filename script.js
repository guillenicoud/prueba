// function pregnombre(nombre) {
//     if (nombre === "GUILLERMO") {
//         return console.log(`Hola Tocayo yo tambien me llamo ${nombre}`);
//     }
//     else if (nombre === "JUAN") {
//         return console.log(`Hola ${nombre} te llamas igual que mi Tio`); 
//     }
//     else if (nombre.trim().length === 0) {
//         return console.log("No ingresaste tu nombre");
//     }
    
// }

// let nombre = prompt("Cual es tu nombre?").trim().toUpperCase();
// pregnombre(nombre);

// const MI_EDAD = 32;

// function saberedad(edad) {
//     if ( edad > MI_EDAD){
//         return console.log("Tienes mas años que yo");
//     }
//     else if (edad < MI_EDAD){
//         return console.log("Eres menor que yo");
//     }
//     else {
//         return console.log("Guau tenemos la misma edad !!!");
//     }
// }

// let edad = Number(prompt("Cual es tu edad"));
// saberedad(edad);

// Numero aleatorio de 0 a 10;

// function randomWholeNum() {
//     let x = Math.random();
//     return Math.floor( x * 10);
// }
// console.log("El numero es ", randomWholeNum());

// let min = 20;
// let max = 100;

// let tot = (max - min + 1) + 1;
// tot = Math.floor(Math.random() * tot);
// console.log(tot);

function countdown(n){
  if ( n <= 0) {
    return [];
  }

  else {
    n++;
    return countdown(n - 1);
  }
}

let a = countdown(5);
console.log(a);