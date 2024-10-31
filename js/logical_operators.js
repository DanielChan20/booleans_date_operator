//&& - AND o Conjuncion logica

const check = 4 > 3 && 10 > 5 //true - true
const check1 = 4 > 3 && 10 < 5 //true && false -> false
const check2 = 4 < 3 && 10 < 5 // flase && false -> false

// || - OR o Disyuncion logica

const check4 = 4 > 3 || 10 > 5 //true
const check5 = 4 > 3 || 10 < 5 // true
const check6 = 4 < 3 || 10 < 5 // false

// ! - NOT , el operador niega verdadero a falso y falso a verdadero.
let check7 = 4 > 3
let check8 = !(4>3)//false
let isLigthOn = true
let isLigthOff = !isLigthOn
let isMarried = !false



//INCREMENT OPERATORS - ++

//Pre-incremento

let count = 0
console.log(++count)
console.log(count) //1

//Post incremento

let count1 = 0
console.log(count1++)
console.log(count1) //1

//DECREMENT OPERATORS

//Pre decremento

let count2 = 0
console.log(--count2)
console.log(count2) // -1

//Postdecremnto

let count3 = 0
console.log(count3--)
console.log(count3) // -1

//TERNARY OPERATORS

let firstCheck = false,
secondCheck = false,
access = firstCheck
? "Acceso Denegado"
:secondCheck
? "Acceso Denegado"
: "Acceso Permitido";
console.log(access) //


let isRaining = true
isRaining
? console.log('You need a rain coat')
: console.log('No need for a rain coat')

isRaining = false
? console.log('You need a rain coat')
: console.log('No need for a rain coat')

