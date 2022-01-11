//      1       2       3
for (let i = 0; i < 10; i++){ // i++ === i += 1 (add 1)
console.log(i);
}

/*
1. Creating a variable
2. Setting a stopping condition
3. Increment expression
*/
//stop code with contrl opt m for macs and ctrl alt m for windows

for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

//challenge: using a for loop, count from 10 to 0, going down by 1

for (let a = 10; a >= 0; a--){
    console.log(a); // a-- === a-=1
}

//challenge: using a for loop, count from 0, going down by 2s to -24.

for(let a = 0; a >= -24; a-=2){
    console.log(a)
}

// challenge: using a for loop, go through a name and display each letter individually. 
let myName = "Kristen";
for (let i = 0; i < myName.length; i++){
    console.log(myName[i]);
}

//Challenge: Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0

for(let i = 1; i <= 50; i++){
    sum += i; // sum = sum + i 
    console.log(sum);
}