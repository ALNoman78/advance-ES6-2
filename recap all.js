// call back function
function callBack(handler , a){
    handler(a)
}
// sub function 
function callChild(name){
    console.log('I want you will resolve you problem',name)
}
// child two function
function goodMorning(name){
    console.log('Good Morning ! Hava a nice day', name)
}
// callBack(callChild , 'Abdulla AL Noman')
// callBack(goodMorning, 'Lal kabutor')


// how to user arguments in js

function sum (a , b){
    // console.log(...arguments)
    const result = a + b;
    return result;
}
const totalSum = sum(2,3,4,6,3,6,2,5)
// console.log(totalSum);


// closure function

function countMain(){
    let counter = 0;
    return function (){
        counter++;
        return counter;
    }
}

const x = countMain()
console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());
const y = countMain()
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());