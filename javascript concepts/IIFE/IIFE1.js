(
    function(){
        var Fname="File1"
        setTimeout(function(){
            document.getElementById("first").innerHTML="Output from file1 with delay of 1.5sec: "+Fname;
        },1500);
    }
)();


//USING let:ES6 onwards

/*
{
    let Fname="File1";
    setTimeout(function(){
        document.getElementById("first").innerHTML="Output from file1 with delay of 1.5sec: "+Fname;
    },1500);
} 
*/