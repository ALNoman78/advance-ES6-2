for(var i = 0; i < 5 ; i++){
    console.log(i);
}
console.log(i);

// if i store a function inside variable then i can't use it before initialization (it will give some error)

// hello(2) // here give me error

const hello = (a) => {
    console.log('Hello world !' , a);
}

hello(2) // best practice 