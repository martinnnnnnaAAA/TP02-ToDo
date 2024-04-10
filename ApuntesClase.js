let nombres = [
"martin",
"matias",
10
]

nombres.push("Juan");
console.log(nombres.length);
nombres.splice(1,1);
nombres.pop();
nombres.unshift(); // agrega primero
nombres.shift(); // borra primero

const personas = [

    "Flecha",
    "Tobias",[
        30,
        40
    ]
]

console.log(personas[2][1]);

console.log(personas.indexOf("Flecha"));
console.log(personas[2].indexOf(30));

const numeros = [1,2,3,4,5,6,7,8]

const dobles = numeros.map(numero => numero * 2);
console.log(dobles)

const impares = numeros.filter(numero => numero % 2);
console.log(impares)

const pares = numeros.filter(numero => !(numero % 2));
console.log(pares)

const encuentro = numeros.filter(numero => numero === 2);
console.log(encuentro)

const sonTodosimPares = numeros.every(n => n % 2);
console.log(sonTodosPares);

const hayAlgunImPar = numeros.some(n => n % 2)
console.log(hayAlgunPar)

let perroFlecha = {
    nombre: 'Sifon' ,
    edad: 3 ,
    color: 'Marron' ,
    vacunado: true,
    peso: 24,
    hermanitos: [{
        nombre: "roco"
    },{
        nombre: "alfonso"
    }
]

}

console.log(perroFlecha.nombre)
console.log(perroFlecha.hermanitos[0].nombre)



