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
// event-loop

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



    
