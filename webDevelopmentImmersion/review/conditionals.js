/*
    CONDITIONALS

    if/else and ternaries
*/

if (condition) {
    // if condition is true, run this block of code 
} else {
    // if condition is false, run this block of code 
}

if (condition) {

} else if (condition) {

} else if (condition) {

} else {
    // code to be ran if all other conditions are read as false - this is commonly referred to as a catch all 
}

// if the light is on, console.log 'the light is on!'. If the light is off, console.log 'the light is off!'

let lightOn = true; 

if (lightOn) {
    console.log('the light is on!')
} else {
    console.log('the light is off!')
}

// ternary

let lightOn = true;
// cond.  cond. to run if true               cond. to run if false
lightOn ? console.log('the light is on!') : console.log('the light is off!');

let weather = 50;
// if weather is greater than 70, console log 'no jacket necessary'. if weather is less than or equal to 70 and greater than 55, console.log 'you should maybe consider wearing a jacket'. Else, console.log 'bundle up!'

if (weather > 70) {
    console.log('no jacket necessary');
} else if (weather <= 70 && weather > 55) {
    console.log('you should maybe consider wearing a jacket');
} else { 
    console.log('bundle up!');
}
//ternary version of ^
let weather = 60;
weather > 70 ? console.log('no jacket necessary') : weather <= 70 && weather > 55 ? console.log ('you should maybe consider wearing a jacket') : console.log('bundle up!');

/*
GRADE CHALLENGE  
    
    given the variable score, write an if/else statement that console.log's a letter grade based on the variable of score. 
    
    If score is greater than or equal to 90, the letter grade should be A. 
    If score is greater than or equal to 80 and less than 90, the letter grade should be B. 
    If score is greater than or equal to 70 and less than 80, the letter grade should be C.
    If score is greater than or equal to 60 and less than 70, the letter grade should be D.
    if score less than 60, the letter grade should be F.
*/
let score = 75;
if (score >= 90){
    console.log('A');
} else if (score >= 80 && score < 90){
    console.log('B');
} else if (score >= 70 && score < 80){
    console.log('C');
} else if (score >= 60 && score < 70){
    console.log('D');
} else {
    console.log('F');
}

let score = 75
score >= 90 ? console.log('A') : score >= 80 && score < 90 ? console.log('B') : score >= 70 && score < 80 ? console.log('C') : score >= 60 && score < 70 ? console.log('D') : console.log('F')