const number1 = 5;
const number2 = 2;

// primitive data er jnno variable er initialize value change hobe na,

// Note : Main value  er initial value change hbe nah but inside function value can be modify

function sumOfNumber(a, b) {
    a = 28;
    const total = a * b;
    return total;
}
// console.log(number1);
const sumTotal = sumOfNumber(number1, number2);
// console.log(sumTotal);
// console.log(number1);


// if it was non primitive data then it will be change their initialize value er man modify kore dey

//value change korar sthe stha main value er initial value keo modify kore dite parbo

const couple1 = {name : 'More ' , partner : 'No one'};
const couple2 = {name : 'Shakib' , partner : 'Inaya'};

function showCouple(team1, team2){
    team1.name = 'Noman'
    team2.partner = 'asdf'
}
// console.log(couple1, couple2);
// showCouple(couple1 , couple2);
// console.log(couple1 , couple2);

// using on array 

const arr1 = [12,34,56];
const arr2 = [32,54,23];

function modifyArray (a , b){
    a[1] = 99;
    b[2] = 11;
    const result = a + b;
    return result;
}
// console.log(arr1 , arr2);
modifyArray(arr1 , arr2);
// console.log(arr1 , arr2);