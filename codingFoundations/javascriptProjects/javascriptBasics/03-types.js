// Boolean
// a boolean has only two possible values, true and false
let on = true;
console.log(on);

let off = false;
console.log(off);

// null
// null is an empty value. We can think of it as an empty container that will take up space. 
let empty = null;
console.log(empty);

// Undeflined
// no value is assigned and it does not act as an empty container.
let undef = undefined; 
console.log(undef);

// Numbers
let degrees = 41;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded); //comes out to 1 and 16 zeros because javascript is not good with numbers this big. 

let decimal = 0.2 + 0.1;
console.log(decimal);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
console.log(numbersAreHard);

let a = Number('123');
console.log(typeof '123');
console.log(typeof a);

// Strings
// Strings are sentences or words wrapped in single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100; // 1150
let second = '1050' + '100'; // 1050100

console.log(first);
console.log(second);

let third = 1050 + '100'; //1050100
console.log(third);

let fourth = '1050' + 100; //1050100
console.log(fourth);