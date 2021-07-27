/*function suma(a, b) {
    var sum = a + b;
    console.log('La suma es: ' + sum);
}

suma(10, 20);


las funciones retornables no reciben parametros solo devuelven los valores

function dato_trabajador() {
    var salario = 2550;
    return salario;
}
var obrero = dato_trabajador();
console.log(obrero); 
*/

//funciones anonimas(flecha)
// las funciones anonimas no tienen nombres
// var resta = function(n1, n2) {
//     return n1 - n2;
// }
// var resta = (n1, n2) => n1 - n2;
// console.log(resta(8, 2));

// var nombre = function() {
//     return "juan";
// }
// console.log(nombre());

// funciones anidadas;

function operacion() {
    const PI = 3.14;

    function area(radio) {
        var area = PI * radio * radio;
        console.log('el area del circulo es: ' + area);
    }
    operacion.area = area;
}
var radio = 5;
operacion();
operacion.area(radio);