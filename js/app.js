//console.log("Hola a todos");
//console.log(5+5);

//Uso de variables
/* var nombre =  'Gabriel';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad ='Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.90;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false; 
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo ;
console.log(puestoDeTrabajo);
puestoDeTrabajo = null;
console.log(puestoDeTrabajo);

 */

/********
 *******Operadores matematicos
 ***** +,-, *, /                                                                                                                                                                                   
 
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual; 

edadAna = 34;
edadMaria = 28;
yearActual = 2019;


diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;


console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Alo en que nacion Ana ' + yearAna);
console.log('Año en que nacio Maria ' + yearMaria);

console.log(yearActual * 5);
console.log(yearActual / 2);
*/

/******** 
 *Operadores Lógicos, unarios y de asifnacion 
 // Lógicos <> <= >= ==
 var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual; 

edadAna = 34;
edadMaria = 28;
yearActual = 2019;


var mayorAna  = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++ incremento, --Decremento

//edadAna++;
console.log(++edadAna);
console.log(edadAna);


//Asignación, +=, -=, *=, /=, %=

var a = 12;
var b = 5;

var c = a % 5;//Residuo o rsto de una divisón 
console.log(c);

a += b;
console.log(a);
*/ 

//SENTENCIAS Y ESTRUCTURAS DE CONTROL
//Senticas if... else  ejecuta un sentencia si una condición especificada es evaluada como 
//verdadero. si la condicion es evaluada como falso, otra sentencia puedes ser ejcutada

/* var nombre = 'Gabriel';
var esCasado = true;

if (esCasado == true) {
    console.log(nombre + ' es casado.');    
} else {
    console.log(nombre + ' es soltero');
    
} */

// IF anidados

/* var nombre = 'Gabriel';
var edad = 79;
//edad < 12 es un niño
//edad > 11, es < 18, es un adulto
//edad > 17, es < 60, es un adulto
//edad > 60 es un ancianao
if ( edad < 12) {
    console.log(nombre + ' es un niño.');    
} else if ((edad  > 11) && (edad < 18)) {
    console.log(nombre + ' es un adolecente.');    

} else if ((edad > 17) && (edad < 60 )) {
    console.log(nombre + ' es un adulto.');    

} else {
    
    console.log(nombre + ' es un anciano');
} */

//SENTENCIA SWITCH

/* var mes = 2;

switch (mes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no encontrado');
} */


//ESTRUCTURA FOR
//Crea un bucle que consiste en tres expresiones opcionales, encerradas en parentesis 
//y separadas por puntos y comas, seguidad de una sentencia ejecutada en un bucle

/* for (var i=5; i <= 25; i+=5) {
    console.log(i);
} 
 */
//Estrucuras while y do while

/* var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
} */
//console.log(i);

// Sentencia Do.. while

/* var i = 11;
do {
    console.log(i);
    //i++;
} while (i <= 10);
console.log(i);
 */

