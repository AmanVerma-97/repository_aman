showDemo();
function showDemo(){
    console.log("Hey");
}

x = 5;
console.log(x);
var x;

function demo() {
    console.log(z);
    var z = 10;
}

demo();

function multiply(a, b) {
    return a*b;
};

console.log(multiply); /*When you use console.log to print a function, 
                         it will display the function itself as an object,
                         including its definition, parameter names, and the code inside it.
                         "multiply" is a variable that stores the address of a function which takes two input and return an output.
                         When we have to execute the function we need to make a function call by adding () at the end of the variable
                         name that stores the address of that function. 
                         If we simply console.log(function-name) then it will display the content that is stored at the address stored by variable. */



//-------------------FUNCTION EXPRESSION[Assining function declaration to a variable]-----------------------------------------------------

var factorial= function fact(n){   // similar to var a=10; so use semicolon after function declaration[line 40]
    var result=1;
    for(i=1;i<=n;i++)
    {
        result*=i;
    }
    return result;
};
console.log("------factorial function expression------");
console.log(factorial);  //this means entire definition
console.log(factorial(5)); //we are calling using variable-name because it contains the function declartion now, so callin using it.


//--------------------FUNCTION AS ARGUMENT TO ANOTHER FUNCTION------------------------------------------------------
console.log("------function as argument-1------");

var factorial2= function fact(n){   // similar to var a=10; so use semicolon after function declaration[line 40]
    var result=1;
    for(i=1;i<=n;i++)
    {
        result*=i;
    }
    return result;
};

function ncr(n,r,func){
    return func(n)/(func(r)*func(n-r));
}
console.log(ncr(8,3,factorial2))  //func will be factorial2 during call to 'ncr'

console.log("------function as argument-2------");

var add = function(a, b) {
    return a+b;
}

var subtract = function(a, b) {
    return a-b;
}

var op = function (func) {
    var x = 2;
    var y = 3;
    return func(x, y);
}

console.log(op(add));
