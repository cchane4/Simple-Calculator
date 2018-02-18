const input = process.argv;


operator = input [2];
let num1 = parseFloat(input [3]);
let  num2 = parseFloat (input [4]);

switch (operator){
case "add":
    console.log((num1) + (num2));
break;

case "subtract":
    console.log((num1) - (num2));
break;

case "multiply":
    console.log((num1) * (num2));
break;

case "divide":
    console.log((num1) / (num2));
break;

case "exponent":
    console.log((num1) ^ (num2));
break;

case "remainder":
    console.log((num1) % (num2));
break;

default:
console.log('Enter a valid operator and two numbers!!');
break;
}

