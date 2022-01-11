// Falsy Values ~things that are not quite things yet!~
/**
 * There are 6 falsy values in JavaScript
 * 1. false
 * 2. 0
 * 3. "", '', ``(empty strings)
 * 4. null
 * 5. undefined
 * 6. NaN (not a number)
 */

// light is currently on
let isOn = true

if (isOn === true) {
    console.log('The light is on!')
} 

if (isOn) {
    console.log('Yayyy, the light is on!')
}

let weather = 65 
if (weather < 70) {
    console.log('You need to wear a jacket.')
}