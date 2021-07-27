//foreach
let numero = [1, 2, 3, 4, 5, 6, 7, 8];

// el METODO FOR EACH es para hacer una accion interna dentro de un array
// aqui se busca el valor 5 dentro del array
// devuelve true si es que encuentra el 5
// numero.forEach((value) => {
//     console.log(value == 5);
// });

// for (i = 0; i < numero.length; i++) {
//     console.log(numero[i]);
// }

// numero.forEach(function(i) {
//     console.log(i);
// })

// el metodo SOME este metodo sirve para verificar si algun valor satisface alguna condicion, acepta condiciones booleanas.

// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros.some((value) => {
//     return (value < 0);
// }));


// el metodo EVERY es lo contrario a SOME
//este metodo verifica que todos los valores cumplan con la condicion solamente asi devuelve TRUE
// en caso de que algun elemento del array no cumpla con la condicion, entonces va a devolver false
// let numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros.every((value) => {
//     return (value == 5);

// }));


// el METODO MAP revisa cada uno de los elementos
// se le llama mapeo, revision
// lo que hace es crear un nuevo array a partir de uno ya existente en este caso es el array numeros, en el cual vamos a modificar alguna necesidad para generar otro array  
// let numeros = [1, 2, 3, 4, 5, 6];

// let duplicar = numeros.map(value => {
//     return value * 2;
// });

// console.log(duplicar);


// el METODO FILTER sirve para filtrar los elementos
// y va a crear un subarray del array numeros
// hace como un despliegue del array numeros
// let numeros = [1020, 3340, 7046, 2550, 1092];

// let numeros_grandes = numeros.filter(value => {
//     return (value > 2500);
// });
// console.log(numeros_grandes);


// el METODO REDUCE
let numero = [1, 2, 3, 4, 5];
let respuesta = numero.reduce((suma, dato_actual) =>
    suma + dato_actual, 0
);
console.log(respuesta);