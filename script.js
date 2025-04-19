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

let names = "nitish"

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

// Main Functions of JS
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function tentimes(num) {
  return num * 10;
}
let ten_multiples = numbers.map(tentimes);
console.log(ten_multiples);

//Filter - Create a new array by keeping the items that return true.
let even_numbers = numbers.filter(function (num) {
  if (num % 2 == 0) {
    return num;
  }
});
console.log(even_numbers);

//Reduce - Accumulate a value by doing something to each item in an array.
let sum_of_numbers = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(sum_of_numbers);

//Find - find the first item that matches from an array.
var first_odd_number = numbers.find(function (num) {
  if (num % 2 != 0) {
    return num;
  }
});
console.log(first_odd_number);

//FindIndex - find the index of the first item that matches.
var first_odd_number_index = numbers.findIndex(function (num) {
  if (num % 2 != 0) {
    return num;
  }
});
console.log(first_odd_number_index);


