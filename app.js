/**
 * Retos de programación
 * 
 *  1. El famoso "FIZZ BUZZ" : 
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 * 
 */

for(let i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 != 0){
        console.log("fizz");
    } else if (i%5 == 0 && i%3 != 0){
        console.log("buzz");
    } else if(i%3 == 0 && i%5 == 0){
        console.log("fizzbuzz");
    } else {
        console.log(i);
    }
}

/**
 *  2. ¿Es un anagrama?
 * 
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 *
 */



function comprobarAnagrama(primerPalabra, segundaPalabra){
    let primerPalabraSeparada = primerPalabra.split("");
    let segundaPalabraSeparada = segundaPalabra.split("");

    let primerPalabraInversa = primerPalabraSeparada.reverse().join("").toLowerCase();
    let segundaPalabraInversa = segundaPalabraSeparada.reverse().join("").toLowerCase();

    if(primerPalabraInversa === segundaPalabraInversa){
        return false;
    } else {
        return true;
    }
}

let anagrama = comprobarAnagrama("Gato", "Perro");

console.log(anagrama);

/**
 *  3. La sucesión de fibonacci
 *  
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let numerosDeFibonacci = [0, 1];

function calcularSecuenciaFibonacci(){
    let numFibonacci = 0;
    for(let i = 3; i<=50; i++){
        numFibonacci = numerosDeFibonacci[numerosDeFibonacci.length - 1] + numerosDeFibonacci[numerosDeFibonacci.length - 2];
        numerosDeFibonacci.push(numFibonacci);
    }
    return;
}

calcularSecuenciaFibonacci();   

console.log(numerosDeFibonacci);

/**
 *  4. ¿Es un número primo?
 * 
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.

 */

function verificarNumerosPrimos(){
    for(let i=1; i<=100; i++){
        if(esPrimo(i)){
            console.log(i);
        }
    }
}

function esPrimo(numero){
    if(numero < 2){
        return false;
    }

    for(let i=2; i<numero; i++){
        if(numero % i === 0){
            return false;
        }
    }

    return true;

}

verificarNumerosPrimos();

/**
 *  5. Área de un polígono
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


function calcularAreaPerimetroPoligono(poligono){
    poligono = parseInt(prompt("Escriba 1 si el poligno es un Triangulo, 2 si es un Cuadrado o 3 si es un Rectángulo"));

    if(poligono === 1){
        let primerLado = parseFloat(prompt("Ingrese el valor del primer lado del triangulo"));
        let segundoLado = parseFloat(prompt("Ingrese el valor del segundo lado del triangulo"));
        let base = parseFloat(prompt("Ingrese el valor de la base del triangulo"));

        let hipotenusa = primerLado > segundoLado ? primerLado : segundoLado;

        return `El area del triangulo es ${(base * Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow((primerLado < segundoLado ? primerLado : segundoLado), 2))) / 2} y el perimetro es ${primerLado + segundoLado + base}`;

    } else if(poligono === 2){
        let lado = parseFloat(prompt("Ingrese el valor de los lados del cuadrado"));
        
        return `El area del cuadrado es ${Math.pow(lado, 2)} y el perimetro del cuadrado es ${lado*4}`

    } else if(poligono === 3){
        let base = parseFloat(prompt("Ingrese el valor de la base del rectangulo"));
        let altura = parseFloat(prompt("Ingrese el valor de la altura del rectangulo"));

        return `El area del rectangulo es ${base * altura} y el perimetro del rectangulo es ${(base * 2) + (altura * 2)}`;
    }
}

let poligono = calcularAreaPerimetroPoligono();

console.log(poligono);

/**
 *  6. Aspect ratio de una imagen
 * 
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

