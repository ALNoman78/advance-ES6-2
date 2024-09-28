function sum(a , b , c){
    console.log(...arguments); // array like oject if i use spread operator it will be convert to arrays
    const total = a + b + c
    return total;
}

const numbers = sum(12,43,65,76,23,75)
console.log(numbers);
console.log(sum.length);