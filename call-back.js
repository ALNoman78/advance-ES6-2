function greetings(handler, name){
    handler(name) //when i know this parameter pass by a function
}

function show(name){
    console.log('This is call back function pass parameter', name);
}
function greetNight(name){
    console.log('Good Night',name);
}
function goodLove(name){
    console.log('Good Morning', name);
}

greetings(show, 'Maisa Monoara Moule');
greetings(greetNight, 'Abdulla Al Noman');
greetings(goodLove, 'Harry !')