// for loops offer us a quick and easy way to do something repeatedly 
// initial expression   condition  incrementer 
for   (let     i    = 0; i <= 10;  i++  )    {
    console.log(i);
}

/*
    BRONZE

    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++) {
console.log(alphabet[i]);
}

/* 
    SILVER

    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);}
    if (alphabet[i] % 2 == 0) {
        console.log(alphabet[i]);
    } else {
        console.log('the index is an odd number')
    }
    
for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] % 2 == 0) {
        console.log(alphabet[i])
    } else {
        console.log('the index is an odd number')
    }
}    
    
    
    
  
