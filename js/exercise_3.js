//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Daniel';
let lastName = 'Chan';
let country = 'Mexico';
let city = 'Playa del Carmen';
let age = 20;
let isMarried1 = false;
let year = 2024;

console.log(typeof firstName); 
console.log(typeof lastName);
console.log(typeof country); 
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried1); 
console.log(typeof year); 

//2.Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false, '10' es un string, 10 es number

//3.Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8') === 10); // false, parseInt('9.8') es 9

//4.Boolean value is either true or false. 

// a.Write three JavaScript statements which provide truthy value. 
console.log(Boolean(20)); // true
console.log(Boolean('Hola Mundo')); // true
console.log(Boolean({})); // true

// b.Write three JavaScript statements which provide falsy value. 
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean('')); // false

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 

let result1 = 4 > 3;// true
let result2 = 4 >= 3;// true
let result3 = 4 < 3;// false
let result4 = 4 <= 3;// false
let result5 = 4 == 4;// true
let result6 = 4 === 4;// true
let result7 = 4 != 4;// false
let result8 = 4 !== 4;// false
let result9 = 4 != '4';// false
let result10 = 4 == '4';// true
let result11 = 4 === '4';// false

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

//6.Use the Date object to do the following activities 

let today = new Date();
console.log(today.getFullYear()); // i. What is the year today?
console.log(today.getMonth() + 1); // ii. What is the month today as a number?
console.log(today.getDate()); // iii. What is the date today?
console.log(today.getDay()); // iv. What is the day today as a number?
console.log(today.getHours()); //v. What is the hours now?
console.log(today.getMinutes()); // vi. What is the minutes now?
console.log(Date.now()); // vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.

//7.Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 

let base = prompt('Enter base:'); 
let height = prompt('Enter height:'); 
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

//8.Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c) 

let sideA = prompt('Enter side a:'); 
let sideB = prompt('Enter side b:'); 
let sideC = prompt('Enter side c:'); 
let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);


