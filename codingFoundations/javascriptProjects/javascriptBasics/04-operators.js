let x = 5; //whatever we put after let is the name of the variable. It doesnt matter what you name the variable!!
console.log(x);
//how could we add two?
// let y = x + 2
x = x + 2
console.log(x);

x = x + 15;
console.log (x);
// How can we add two numbers together more easily? 
// Addition operator = assign x the value of itself + 5
x += 5; 
console.log(x);


let y = 50;

// Subtraction 
y = y - 5;
console.log(y);

// Subtraction Operator!!!
y-= x; // this is like 45 - 27 
console.log(y); //if I were to only console.log this particular section, i would only see 18. It does not let code run, it just lets us see what happeneds after code has been run 

let z = 10

// Multiplication 
z = z * 8;
console.log(z);


// Multiplication Operator
z *= 8; // 80 x 80
console.log(z); //if i wanted to multiply our value for z by 80, id do z *= z


// Division 
z = z / 4;
console.log(z);

// Division operator!!
z /= 5; //160 divided by 5
console.log(z);


let apples = 7 + 10 * 90 / 9; 
console.log(apples);

// Remainder ( or called Modules) - ONLY works for division!!!!
// 5 % 2 = 1. Because 2 goes into 5 2 times (4), 5 - 4 is 1, which is not dividable by 2, so it is leftover. 
let leftovers = apples % 13 // remainder after dividing by 13. Instead of giving how many times 13 goes into apples, it gives us whatever is leftover when it cannot evenly go into apples. As soon as we do not have 13 apples, it gives us the leftover. 
console.log(leftovers);

apples %= 10 
console.log(apples) // 10 goes into 107 10 times. 107-100 = 7


let base = 5;
// Exponent 
base = base ** 2 // 5^2
console.log(base);

// Exponential Operator 
base **= 3 // 25 to the third power
console.log(base);