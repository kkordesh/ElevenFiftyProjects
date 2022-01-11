let num = 6;

if(num > 0) {
    console.log('Yes');
} else {
    console.log('No');
}

//ternary:
//condition      if true             if false
     num > 0 ? console.log('Yes') : console.log('No');


if(num === 0) {
    console.log('no number chosen');
} else if (num < 0) {
    console.log('Negative Number');
} else {
    console.log('Positive Number');
}

//ternary:
num === 0 ? console.log('No number chosen') : num < 0 ? console.log('Negative number') : console.log('Positive Number')
//make it easier to read
num === 0 ? 
console.log('No number chosen') :
 num < 0 ? console.log('Negative number') : 
 console.log('Positive Number');

 /*
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age=30
age >= 25 ? console.log('Yay! You can rent a car!') : age >= 21 ? console.log('Yay! You can drink!') : age >= 18 ? console.log('Yay! You can vote!') : console.log ('sorry, you are too young to do anything fun.');