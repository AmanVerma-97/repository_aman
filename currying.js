/*A closure may be described as a combination of a function and the lexical environment in which it was declared
The lexical environment consists of any local variables in the function’s scope when the function is created. 
A closure enables one to refer to all local variables of a function in the state they were found.
This is essentially achieved by defining a function inside another function, 
this function within a function is technically the closure.*/

function closure(){
    function first() { console.log('I was declared first')}
    function second() { console.log('I was declared second')}
    function third() { console.log('I was declared third')}
    return [first, second, third]
}

let f = closure()

let one = f[0]
let two = f[1]
let three = f[2]

one() // logs I was declared first
two() // logs I was declared second
three() // logs I was declared third

console.log("-------------CURRYING-------------");
/*Currying is the pattern of functions that immediately evaluate and return other functions. 
This is made possible by the fact that Javascript functions are expressions that can return other functions.
Curried functions are constructed by chaining closures by defining and 
immediately returning their inner functions simultaneously. */

let greeting = function (a) {
    return function (b) {
        return a + ' ' + b
	}
}

let hello = greeting('Hello')
let morning = greeting('Good morning')

console.log(hello('Austin'));// returns Hello Austin
console.log(hello('Roy')); // returns Hello Roy
console.log(morning('Austin')); // returns Good morning Austin
console.log(morning('Roy')); //returns Good Morning Roy

console.log("-------------CURRYING shorthand notation using ARROW function ES6-------------");

let greetings = (a) => (b) => a + ' ' + b 

console.log(greetings('Hello There')('General Kenobi'));