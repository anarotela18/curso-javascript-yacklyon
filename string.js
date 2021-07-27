let color = "rojo \nverde";
let fruta = "manzana";
console.log(fruta.length);
console.log(fruta.toUpperCase());
console.log(fruta.toLowerCase());

// indexOf su funcion es determinar una posición, empezando desde el posición 0
let curso = "javascript";
console.log(curso.indexOf('c'));

// slide su funcion es determinar la posicion indicando desde que punto a que punto debe ir. 
//Este ejemplo devuelve vas
console.log(curso.slice(2, 5));


// replace su funcion es reemplazar los valores
console.log(curso.replace('javascript', 'php'));

// split 
console.log(curso.split(''));
console.log(curso.split(','));

// para convertir strings a numeros
var numero_uno = "2";
var numero_dos = "3";
console.log(Number(numero_uno) + Number(numero_dos));