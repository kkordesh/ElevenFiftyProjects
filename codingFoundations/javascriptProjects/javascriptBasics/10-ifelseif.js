/* CHALLENGE - 
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

 let Age = 21


 if(Age >= 25) {
     console.log ('You can rent a car');
 } else if (Age >= 21){
 console.log ('You can drink!');
 } else if (Age >=18) {
     console.log ('You can vote!');
 } else {
     console.log('You are not old enough to do anything');
 }

// This is the right answer. there are lots of ways to do it but this one is right.
 let age = 21;
 if (age <= 17){
     console.log('sorry, you are too young to do anything');
 } else if (age < 21) {
     console.log('You can vote!');
 } else if (age < 25) {
     console.log('You can drink!');
 } else {
     console.log ('You can rent a car!');
 }