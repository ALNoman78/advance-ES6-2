// function stopWatch(){
//     let counter = 0;
//     return function(){
//         counter ++;
//         return counter;
//     }
// }
// const server = stopWatch()
// console.log(server()); // because of server variable store a function which called stopWatch()



function showName (){
    let counter = 0;
    return function(){
        counter ++;
        return counter;
    }
}

const x = showName()
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
console.log(x()); 
const y = showName()
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());
console.log(y());