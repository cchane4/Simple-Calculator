const input = process.argv;
console.log(input);


operator = input [2];
let num1 = input [3];
let  num2 = input [4

switch (operator){
case "add":
    console.log(parseFloat(num1) + parseFloat(num2));
break;

case "subtract":
    console.log(parseFloat(num1) - parseFloat(num2));
break;

case "multiply":
    console.log(parseFloat(num1) * parseFloat(num2));
break;

case "divide":
    console.log(parseFloat(num1) / parseFloat(num2));
break;

case "exponent":
    console.log(parseFloat(num1) ^ parseFloat(num2));
break;

case "remainder":
    console.log(parseFloat(num1) % parseFloat(num2));
break;

default:
console.log('Enter an operator and two numbers!!');
break;
}

