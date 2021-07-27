/* eval
var a = 10;
var b = 20;
var x = eval("a + b");
var y = eval("3 + 4");
var z = eval("a + 8");
var respuesta = a + y;
console.log(respuesta);

// parsefloat sirve para obtener solo la parte numerica
var a = parseFloat("10");
var b = parseFloat("20curso");
var c = parseInt("10curso");
console.log(a);
console.log(c);
*/

// Date.parse() sirve para darnos un valor exacto en milisegundos para la fecha inicial 1 enero de 1970 que por defecto javascript lo define asi, con la fecha final que para el ejemplo seria Abril 26

var dato = "January 1, 1970 1:30 PM";
var resultado = Date.parse(dato);
console.log(resultado);