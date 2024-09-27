function sum(a , b , c){
    console.log(arguments);
    const total = a + b + c
    return total;
}

const numbers = sum(12,43,65,76,23,75)
console.log(numbers);