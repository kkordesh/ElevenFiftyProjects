console.log('Hello from script.js');
//one way to select an item from a web page
let listTitle = document.getElementById('listTitle'); ///get element by Id grabs the first element with a given id though u should only have one with that id anyways, right? 
console.log(listTitle);

let listItem = document.querySelector('ul li');//select list item in unordered list. Query selector will ONLY find the FIRST thing that matches the argument 
console.log(listItem) // selects write article bc its the very first item of an unordered list
//changing the alignment of the text
listItem.style.textAlign = "center";
//changing the color of the text
listItem.style.color = 'red';

//get every element with a certain class
let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery); //HTML collection
console.log(grocery instanceof Array); //false
console.log(grocery[2]); //gives index of 2, or third listed item, Boom Berry Juice 
console.log(grocery.item(2));// gives boom berry juice item again 

let liTag = document.getElementsByTagName('li');
console.log('Elements by tag name:', liTag);

let selectAll = document.querySelectorAll('ul li') //will get AAAALLL list items within an unordered list
console.log('Select All', selectAll);

for(let i = 0; i < selectAll.length; i++) {
    selectAll[i].style.backgroundColor = 'blue';
    selectAll[i].style.color = "white";
}

console.log('Body child nodes:' , document.body.childNodes);

let mainList = document.getElementById('list'); //get an element with an id of list
//let mainList = document.querySelector('#list'); // get an element with an id of list

console.clear(); // clears the console!
console.log(mainList.childNodes); // give us a list of all children nodes
console.log(mainList.firstChild); // gives us the first child node
console.log(mainList.firstElementChild); //
console.log(mainList.lastChild); // gives us the last child node
console.log(mainList.lastElementChild);
console.log(mainList.parentNode); // gives us the node that is the parent of our target, in this case it is the body tag
console.log('Parent Element:', mainList.parentElement)
console.log(mainList.nextSibling); // gives us the node that is next to our target
console.log(mainList.nextElementSibling); //gives us the element that is next to our target
console.log(mainList.previousSibling); //gives us the node before our target

console.clear();

let listDiv = document.getElementById('list');
console.log(listDiv.firstElementChild);

let listItems = document.getElementsByClassName('listItem');
listItems[4].innerText = 'Buy a new cauldron'; 

// Challenge: Replace the term "Flobberworm Mucus" in the shopping list with something else using DOM manipulation (do not change the html fine)

let store = document.getElementsByClassName('groceryItem');
store[1].innerText = 'Frog legs';

//document.getElementById('clickMe').addEventListener('click', function() {} );
//or
document.getElementById('clickMe').addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor ="pink";
    event.target.innerText = 'Thanks for clicking me!';
});

document.getElementById('listInput').addEventListener('keyup',function(event){
    console.log(event.target.value); 
})


//creating and adding elements to the page
//create a new <li></li> tag 
let newGrocery = document.createElement('li');
let groceryList = document.getElementById('groceryList');

//add the <li> tag to the grocery list
//parent                child
groceryList.appendChild(newGrocery);
newGrocery.innerText = 'Zucchini'

//Challenge: Make an h3 tag that says "groceries" and add it below the list of groceries using only DOM manipulation

let newTag = document.createElement('h3');// <h3></h3>
let groceryDiv = document.getElementById('groceryDiv');//grab the grocery container
groceryDiv.appendChild(newTag) //put the new tag inside of the grocery div
newTag.innerText = 'Groceries'; // line 102 -> <h3>Groceries</h3>

//groceryDiv.appendChild(newTag); //put the newTag inside of the groceryDiv

//insert something before a given tag
//parent                new tag, the child to insert before
groceryDiv.insertBefore(newTag, groceryDiv.childNodes[0]);

console.log(groceryDiv.childNodes)