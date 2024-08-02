/***************** definición de funciones *****************/
//Crear una función (sumar) que te genere la suma de dos números
function sumar(a = 0, b = 0) {
    return a + b;
}

//Crear una función que obtenga el mayor valor de tres números
function obtenerMayor(a, b, c) {
    let mayor = a;
    if(b > mayor) {
        mayor = b;
    }
    if(c > mayor) {
        mayor = c;
    }
    return mayor;
}


function obtenerMayor02(a, b, c) {
   return Math.max(a, b, c)
}

//Escribe una función llamada factorial que tome un número como argumento y devuelva su factorial.
/*
1! = 1
2! = 2 x 1 = 2
3! = 3 x 2 x 1 = 6
4! = 4 x 3 x 2 x 1 = 24
5! = 5 x 4 x 3 x 2 x 1 = 120

factorial(1)  = 1
factorial(2)  = 2
factorial(3)  = 6
...
*/

function factorial(numero) {
    if (numero === 0 || numero === 1)
        return 1;
    else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


function factorial_recursion(n) {
    if (n === 0 || n === 1)
        return 1;
    else if (n > 1)
        return n * factorial_recursion(n - 1);
    else
        return 1;
}

/*
fib(1) = 1
fib(2) = 1
fib(3) = 1 + 1 = 2
fib(4) = 2 + 1 = 3
fib(5) = 3 + 2 = 5
fib(6) = 5 + 3 = 8
fib(7) = 8 + 5 = 13
fib(8) = 13 + 8 = 21
*/

function fibonacci(num) {
    if (num === 1 || num === 2)
        return 1;
    else if (num > 2 )
        return fibonacci(num - 1) + fibonacci(num - 2);
}

/*
sumaEsp(1) = 1
sumaEsp(2) = 1 + 2 = 3
sumaEsp(3) = 1 + 2 + 3 = 6
sumaEsp(4) = 1 + 2 + 3 + 4 = 10
*/

function sumaEsp(num) {
    if (num === 1)
        return 1;
    else if (num > 1) {
        let resultado = 1 //El número es mayor que 1, no está considerando el resultado de 1. Por eso el resultado es 1
        for(let i = 2; i <= num; i++) {
            resultado += i;
        }
        return resultado;
    }
} 


/*Crea una función que al ingresar dos palabras verifique que sean dos palabras de anagramas
manila - animal
España - apañes
ballena - llenaba
Sergio - riesgo
*/

/*
 * Returns a boolean value *
 * @param {string} cad01 - first string *
 * @param {string} cad02 - second string *
 * @returns {boolean} a boolean value *
*/

function areAnagrams(cad01, cad02){
    let isAnagram = false;
    //Caso Negativo 1: No tienen la misma longitud
    if(cad01.length != cad02.length){
        return isAnagram;
    } else{ //Bloque de que cad01 y cad02 tienen la misma longitud
        for(let i = 0; i < cad02.length; i++){ //Iteración cad01
            //Caso Negativo 2: La letra cad01[i] no está en cad02
            if(cad02.indexOf(cad01[i]) == -1){
                return isAnagram;
            } else{ //La letra cad01[i] está en la palabra cad02
                
            }
        }
    }
}

console.log("areAnagrams: ", areAnagrams("hola", "ola"))




/***************** Llamada a las funciones *****************/
console.log("sumar(1, 4): ", sumar(1, 4))

console.log("")

console.log("obtenerMayor(1, 5, 0): ", obtenerMayor(1, 5, 0))
/*
mayor = 1
1 > 5 no es cierto ==> Ya que 1 no es mayor que 5, mayor = 5
5 > 0 es cierto ==> mayor = 5
*/
console.log("obtenerMayor(5, -1, 7): ", obtenerMayor(5, -1, 7))
/*
mayor = 5
-1 > 5 no es cierto ==> mayor = 5
7 > 5 es cierto ==> mayor = 7
==> mayor = 7
*/
console.log("obtenerMayor(5, 6, 7): ", obtenerMayor(5, 6, 7))

console.log("")

console.log("obtenerMayor02(1, 5, 0): ", obtenerMayor02(1, 5, 0))
console.log("obtenerMayor02(5, -1, 7): ", obtenerMayor02(5, -1, 7))
console.log("obtenerMayor02(5, 6, 7): ", obtenerMayor02(5, 6, 7))

console.log("")

console.log("factorial(1): ", factorial(1));
console.log("factorial(2): ", factorial(2));
console.log("factorial(3): ", factorial(3));
console.log("factorial(4): ", factorial(4));
console.log("factorial(5): ", factorial(5));
console.log("factorial(7): ", factorial(7));
console.log("factorial(-7): ", factorial(-7));

console.log("")

console.log("factorial_recursion(1): ", factorial_recursion(1));
console.log("factorial_recursion(2): ", factorial_recursion(2));
console.log("factorial_recursion(3): ", factorial_recursion(3));
console.log("factorial_recursion(4): ", factorial_recursion(4));
console.log("factorial_recursion(5): ", factorial_recursion(5));
console.log("factorial_recursion(7): ", factorial_recursion(7));
console.log("factorial_recursion(-1): ", factorial_recursion(-1));

console.log("")

console.log("fibonacci(1): ", fibonacci(1))
console.log("fibonacci(2): ", fibonacci(2))
console.log("fibonacci(3): ", fibonacci(3))
console.log("fibonacci(4): ", fibonacci(4))
console.log("fibonacci(5): ", fibonacci(5))
console.log("fibonacci(15): ", fibonacci(15))

console.log("")

console.log("sumaEsp(1): ", sumaEsp(1))
console.log("sumaEsp(2): ", sumaEsp(2))
console.log("sumaEsp(3): ", sumaEsp(3))
console.log("sumaEsp(6): ", sumaEsp(6))
console.log("sumaEsp(20): ", sumaEsp(20))
console.log("sumaEsp(10): ", sumaEsp(10))
console.log("sumaEsp(30): ", sumaEsp(30))