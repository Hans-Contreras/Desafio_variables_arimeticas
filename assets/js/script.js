/*   //(alt39 '; alt96 `;)   */



do {
var opcion = prompt(
"Ingrese la operacion que desee \n 1. Ejercicio 1\n 2. Ejercicio 2\n 3. Ejercicio 3\n 4. Ejercicio 4\n 5. Ejercicio 5");

switch (opcion) {
case "1":

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejercicio N°1
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var path= "assets/img/Diagrama_de_flujo.png";
var img=document.createElement('img'); 
img.setAttribute("src",path);
img.setAttribute("width","auto");
img.setAttribute("height","auto");
document.getElementById("content").appendChild(img);

break;
    
     


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejercicio N°2
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

case "2":

//Ingreso de datos
var A = parseInt(prompt("Ingrese primer número > 0"));
var B = parseInt(prompt("Ingrese segundo número distinto > 0"));

//Operaciones
var suma=A+B
var resta=A-B
var divi=A/B
var multi=A*B
var modulo=A%B

//Mostrar
document.write(`<br><br> La suma de ambos números es: ${suma}  `);
document.write(`<br><br> La resta de ambos números es: ${resta}  `);
document.write(`<br><br> La división de ambos números es: ${divi.toFixed(2)}  `);
document.write(`<br><br> La multiplicación de ambos números es: ${multi}  `);
document.write(`<br><br> El modulo de ambos números es: ${modulo}  `);
document.write(`<br><br>`);

break;




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejercicio N°3
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

case "3":

//Ingreso de datos
var T = parseInt(prompt("Ingrese temperatura en C°:"));

//Definición de constantes
const K = 273.15
const F = 9/5

//Cálculos
var Kel = Math.floor(T+K)
var Far = Math.floor(T*F)+32

//Mostrar
document.write(`<br><br> Su equivalente en Kelvin es: ${Kel}° y en Farenheit es; ${Far}°`);
document.write(`<br><br>`);

break;

          


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejercicio N°4
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

case "4":

//Ingreso de datos
var d = parseInt(prompt("Ingrese el número de días:",));

//Cálculos
var año = Math.floor(d/365);
var restoA = d%365;
var semana = Math.floor(restoA/7);
var dias = restoA%7;

//Mostrar
document.write(`<br><br> Su equivalente es ${año} años, ${semana} semanas y ${dias} días.`);
document.write(`<br><br>`);

break;




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejercicio N°5
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

case "5":

//Ingreso de datos
var n1 = parseInt(prompt("Ingrese primer número",));
var n2 = parseInt(prompt("Ingrese segundo número",));
var n3 = parseInt(prompt("Ingrese tercero número",));
var n4 = parseInt(prompt("Ingrese cuarto número",));
var n5 = parseInt(prompt("Ingrese quinto número",));

//Cálculos
var suma_ej_5 = n1+n2+n3+n4+n5
var promedio = suma_ej_5/5

//Mostrar
document.write(`<br><br> La suma de todos los números es ${suma_ej_5}, y el promedio de todos los números es ${promedio}`);
document.write(`<br><br>`);

}
} while (opcion > 5 || opcion < 1);
