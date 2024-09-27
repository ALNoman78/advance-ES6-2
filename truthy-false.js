// truthy  value and falsy value

/*
*Truthy value
1. true
2. any number is truthy value
3. all string is truthy value
4. empty array and empty object is truthy value

*Falsy Value
1.False
2.undefined
3. 0 is an falsy value
4. empty string is falsy value
5. null is false value
 */

// let x = [];
// console.log(x);
// if (!x) {
//     console.log('Truthy false') 
// }


// how to check falsy value in condition

// (!variable name ) = check falsy value
// (!!variable name ) = check truthy value & (variable name ) that's same 

const y = 'Maisa Monoara Moule'
if(!!y){    
    console.log('value is truthy' , y);
}