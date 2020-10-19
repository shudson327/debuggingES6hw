var x = 3;
var y = 27;

function sum(num1, num2){
    return num1 + num2;
} 

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1*num2;
}

function div(num1, num2){
    return num1/num2;
}

var sumArrow = (num1,num2) => num1 + num2;
var subArrow = (num1,num2) => num1 - num2;
var mulArrow = (num1,num2) => num1 * num2;
var divArrow = (num1,num2) => num1 / num2;

console.log(sum(x,y));
console.log(sub(x,y));
console.log(mul(x,y));
console.log(div(x,y));

console.log(sumArrow(x,y));
console.log(subArrow(x,y));
console.log(mulArrow(x,y));
console.log(divArrow(x,y));