let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; //tells js i am done writing in this case
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim": // if (officeCharacter === "Jim")
        console.log("Bears. Beets. Battlestar Galactica.");
        break;
    default: //else (if none of our cases are met)
    console.log(`I'm sorry ${officeCharacter}, but do I know you?`); //string interpolation here.. makes it shorter 
}

//if we didnt use string interpolation here, it would look like:
console.log(
    "I,m sorry, " + officeCharacter + ", but do I know you?"
)

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "Pie";

switch (dessertType.toLowerCase()) { //makes it so the input is not case sensitive!
    case "Pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice Cream":
        console.log("I scream for ice cream!");
        break;
    default: 
    console.log("Not on the menu.");
} 

let num = -40;

switch (true) {
    case (num < 0): // num < 0 - > -40 <0 -> true ... if num is less than 40 we should see "neg number"
        console.log('Negative Number');
        break;
        // true (7>0)    and  true ( 7<10)
    case (num >= 0 && num < 10):
        console.log('Single Digit Number');
        break;
    
}