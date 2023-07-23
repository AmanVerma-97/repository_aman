var a=10;
function outer(){
    var b=20;
    console.log(a,b);
    var inner=function(){
        var c=30;
        console.log(b,c);
    }
    return inner;
}

var inner=outer();  //ideally all properties/variables associated with outer() should clear out of local memory after this line.
inner();  //value of b is still available here beacuse of 'closure'.


/* 'Closure' is created only when inner function is made
    accessible outside the function it was created inside. */

console.log("----------------------");
 var x=10;
 function outside(){
    var y=20;
    var inside=function(){
        var z=30;
        console.log(x, y, z);
        x++;
        y++;
        z++;
    }
    return inside;
}

var inside=outside(); //inside saves 'scope chain' of outer functions, so all variables are available to it as well.
inside();
inside();
inside=outside(); //a new outside environment scope is created, but global 'x' remains unchanged.
inside();

/*                                                 --------------
                                                   |  global    |  executed on line 34(10),35(11) 37(12)
                                                   |     x      |  
                                                   --------------
                                      called on line 34,35      called on line 37
                                       --------------           --------------
                                       |  outside   |           |  outside   |
                                       |     y      |           |     y      |
                                       --------------           --------------
                                       called on line 34        called on line 37
                                      --------------            --------------
                                      |  inside    |            |  inside    |  
                                      |     z      |            |     z      |
                                      --------------            --------------
                                      called on line 35        
                                      --------------
                                      |  inside    | 
                                      |     z      |  
                                      --------------

*/