const input = process.argv;


operator = input [2];
let num1 = parseFloat(input [3]);
let  num2 = parseFloat(input [4]);


if (operator == 'add'){
    console.log((num1) + (num2));
}
else if (operator == 'subtract'){
    console.log((num1) - (num2));
}
else if (operator == 'multiply'){
    console.log((num1) * (num2));
}
else if (operator == 'divide'){
    console.log((num1) / (num2));
}
else if (operator == 'exponent'){
    console.log((num1) ^ (num2));
}
else if  (operator == 'remainder'){
    console.log((num1) % (num2));
}

else { console.log('Enter a valid operator and two numbers!!')
}

