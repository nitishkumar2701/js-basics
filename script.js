alert("Hello World");
// creating a normal alert in js


let a = 10;
let b = 5;
let c = a+b;
alert(c);
// adding two numbers

let num = prompt("enter the number");
let square_num = num*num;
console.log("the square is",square_num);
// getting user input and squaring them

let names = "divyan"

let str = prompt("enter the name:");

if(str == names){
    console.log("match found");
}
else{
    console.log("match not found");
}
// checking conditional statements


for (let i = 1; i <=5; i++) {
   console.log(i);
}
// printing numbers  between a range using for loop

let i=1
while (i<2) {
console.log("hello");
break;
}
// printing hello using while loop

let num1 =10;
let num2 =20;

function add(a,b){
    let c = a+b;
    console.log(c);
}
// adding two numbers using function

add(num1,num2);
// calling the function

document.querySelector('h1').style.color="red";
// changing the color of h1 using js

function gettingInput(){
     let username = document.getElementById("uName").value;
     let password = document.getElementById("uPass").value;
    document.querySelector("h2").innerText=username;
    document.querySelector("h3").innerText=password;
}
// getting input from user using js function

