// conditional-statements
let a = 9;
let b = 1;
if (a > 8 || b <= 0) {
    console.log("hlo")
}
else {
    console.log("hello")
}

// teronary opreaters
const age1 = 26;
const beverage = age1 >= 27 ? "deep" : "reet";
console.log(beverage);


// for loop
let str = '';
for (let i = 0; i < 11; i++) {
    str = str + i;
}
console.log(str);

// loop-while
let n = 0;
while (n < 3) {
    n++;
}

// do-while
let text = "";
let i = 0;
do {
    text += i + "<br>";
    i++;
}
while (i < 6);
document.getElementById("while").innerHTML = text;

// event-loop
console.log("hello")
setTimeout(() => {
      console.log("hello world");
},);
console.log("this is just a message")
// .......................................dom.........................
 

// class name
document.querySelector("p.example").style.backgroundColor = "red";

// document get element by id
document.getElementById('name').innerHTML = "hello-world";

// document get tag name
const element = document.getElementsByTagName("p").innerHTML = "hlo";
document.getElementById("demo").innerHTML = 'The text in first paragraph ' + element[0].innerHTML;

// document.createElement
var div = document.createElement("div")
div.innerHTML = "hello";
document.getElementById("main").appendChild(div);

// node.setAttribute('attr-name', 'attr-value')
const button = document.querySelector("button");
button.setAttribute("name", "Contact");
button.setAttribute("disabled", "");

// Get and Modify Element Class
// classlist add 
function myFunction() {
    const list = document.getElementById("mydiv").classList;
    list.add("style");
}
// remove

// document query all selector
const elements = document.querySelectorAll(".p1"); 
elements.forEach(element => {
    element.style.backgroundColor = "yellow";
});

// Auto Inherited Properties
// Array
// /filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 7);
console.log(result);

// map
const array1 = [2, 6, 18, 30];
const map1 = array1.map((x) => x * 2);
console.log(map1);

// find
const array2 = [5, 12, 8, ,42, 130, 44];
const found = array2.find((element) => element > 44);
console.log(found);

// every
const isBelowThreshold = (currentValue) => currentValue < 50;
const array3 = [1, 30, 39, 29, 10, 13];
console.log(array3.every(isBelowThreshold));

// for each
    const array4 = ['a', 'b', 'c'];
array4.forEach((element) => console.log(element));

// Built-in Objects
// /math 
console.log(Math.pow(4, 3));
console.log(Math.sqrt(25));
console.log(Math.min(8, 7, 6));
console.log(Math.max(8, 7, 6));
console.log(Math.floor(124.45));
console.log(Math.ceil(124.45));
console.log(Math.round(124.50));
console.log(Math.random());




    
