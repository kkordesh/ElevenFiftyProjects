/*
    ARRAYS

    - arrays are used to store multiple values in a single variable 
        -there are array methods that allow us to traverse, as well as mutate, the data being held in the array 
    -arrays are 0 indexed, meaning the first item is an array will have an index of 0, and the Last item will have an index of arrays length -1.
*/

let arr = ['this is the first element', 'this is the second element', 'this is the third element'];
console.log(arr[0]);// to grab a specific index, reference the variable that holds the array, and use a square bracket notation to denote what index you want to grab
console.log(arr[1]);
console.log(arr.length); // 3 
console.log(arr[arr.length - 1]); // this is the third element 

// Array Constructor - array constructor is used to create arrays 

let test = new Array()
console.log(test);

let testTwo = new Array(3)
console.log(testTwo.length);

testTwo[0] = 'did it work?';
console.log(testTwo);


/*
    It's important to note that if you use the array constructor to create an array and pass in a singular number, you are creating an array with an initial size or length. If you pass in multiple arguments, you create an array that holds those values. 
*/

let nums = new Array(1, 2, 3, 4, 5);
console.log(nums);

let strings = new Array('this', 'is', 'a', 'test');
console.log(strings[1]);

/*
    FOR EACH

    -the forEach() method is essentially another way to loop over information
    -the forEach() method runs a function once for each element in an array
*/
//for method below
let boardGames = ['Monopoly', 'Clue', 'Risk', 'Candy Land', 'Catan']; 
//   variable         condition         incrementer 
for (let i = 0; i < boardGames.length; i++) {
console.log(boardGames[i]);
}
//for each method below
//TRADITIONAL ANONYMOUS FUNCTION
boardGames.forEach(function (game) {
    console.log(game);
})

// BLOCK BODY ANONYMOUS ARROW FUNCTION 
boardGames.forEach(game => {
    console.log(game);
})

// CONCISE BODY ANONYMOUS ARROW FUNCTIONS
boardGames.forEach(game => console.log(game));

// to access a specific element in an array, use bracket notation along with the index value you want
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList[3]);

//array.length > returns the number of elements in the array 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.length);

// array.push() > adds an element to the end of the array 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
shoppingList.push('salt');
console.log(shoppingList);

// array.pop() > removes the last element in the array and returns that element
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
shoppingList.pop();
console.log(shoppingList);

// array.unshift() >  adds a new to element to the beginning of the array 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
shoppingList.unshift('salt');
console.log(shoppingList);

//array.shift() > removes the first element in an array 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
shoppingList.shift();
console.log(shoppingList);

// array.map() > transforms the element in the original array by calling the given function once for each element in the array 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.map(item => item.toUpperCase())) // assigns the value of 'item' to each item. Then attaches uppercase to each item.
//or you could
console.log(shoppingList.map(function(item){
    item.toUpperCase();
}))  

// array.filter() > creates a new array with only the elements that pass the test in the function supplied to .filter()
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
let filteredShoppingList = shoppingList.filter(item => item.startsWith('b'));
console.log(filteredShoppingList);

// array.includes() > determines whether or not the array contains a specific element 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.includes('chicken'));
console.log(shoppingList.includes('salt'));

//array.reverse() > reverse the order of the elements in the array
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.reverse());

//array.indexOf() > searches the array for a specific element and returns its index. If it cant find an element it will return a -1. 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.indexOf('beef'));
console.log(shoppingList.indexOf('salt'));

//array.join() >  converts the elements of an array into a string. Can accept an optional parameter called a 'separator' which indicates how the elements will be separated. Default separator is a comma.
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(shoppingList.join());
console.log(shoppingList.join('! and '))

// spread operator > ES6 (2017) feature. Spread operator is indicated by "...". Expand the contents of the array, and take those elements out of the array structure. 
let shoppingList = ['chicken', 'beef', 'soup', 'veggies', 'milk'];
console.log(...shoppingList);