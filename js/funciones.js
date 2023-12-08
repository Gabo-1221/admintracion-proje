//FUNCIONES Y ARREGLOS

/* function mensaje() {
    return 'Mensaje como devolucion de la función';
    
}


var msj = mensaje();
console.log(msj);
 */

//ARGUMENTOS DE UNA FUNCION

/* var sumar = function (a,b,c=3) {
    return a + b + c;
}

var result = sumar(4,5,8);
var resultado1 = sumar(3,7);
console.log(result);
console.log(resultado1); */


//FUNCIONES RECURSIVAS


/* var factorial =  function (n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else{
        return (n * factorial(n - 1));
    }
}

console.log(factorial(4));
 */

//FUNCIONES PREDEFINIDAS
//eval --> metodos de verificacion,sirve para evaluar un codigo correcto, debe ir como un string
//isFinite --> evaluar numeros infinitos
//isNaN --> evaluar si no es un numero (no es un numero)
//parseint an parseFloat --> convertir una cadena de texto en un float o en un entero
//Number ans String --> funcion que cambia de nummero a string o viceversa sirve mas para fechas


//ARREGLOS
/* Los arreglos(arrys o matrices) son objetos de tipo lista cuyo prototipo tiene metodos para realizar operaciones de recorrio y mutacion
ni la longitud olos tipos de los elementos del array son fijos
dado que la longitud de un array puede cambiar en cualquier momento y los datos pueden almacenar en ubicaciones no contiguas en el , 
no se garantiza que los arrays JavaScrpit sean densos, esto depende de como el programador opte por usarlos */

var nombres = ['Grover','Carlos','Ana','Luisa'];
var vegetales  = new Array('Tomate','Lechuga','Zanahoria');

/* console.log(nombres[3]);
console.log(vegetales[1]);

nombres[0] = 'Jose';
vegetales[2] = 'Nabo';

console.log(nombres[0]);
console.log(vegetales[2]); 

console.log(nombres.length);

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}

vegetales.forEach(function(elemento, indice) {
    console.log(elemento, indice);
});
*/

/* console.log(nombres);
nombres.push('Pedro');
console.log(nombres);
nombres.unshift('Lili');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('Carlos');
console.log(pos);

nombres.splice(1,2);
console.log(nombres);
 */

