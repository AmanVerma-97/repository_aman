let colorChange=0;
function changeColor(){
    ++colorChange;
    switch(colorChange){
        case 1:
            document.getElementById("colorchange").style.backgroundColor="cyan";
            break;
        case 2:
            document.getElementById("colorchange").style.backgroundColor="maroon";
            break;
        case 3:
            document.getElementById("colorchange").style.backgroundColor="skyblue";
            break;
        default:
            document.getElementById("colorchange").style.backgroundColor="black";
            colorChange=0;
            break;
    }
}

let shapeChange=0;
function changeShape(){
    ++shapeChange;
    switch(shapeChange){
        case 1:
            document.getElementById("shapechange").style.height="80px";
            document.getElementById("shapechange").style.width="80px";
            document.getElementById("shapechange").style.borderRadius="50%";
            break;
        case 2:
            document.getElementById("shapechange").style.height="60px";
            document.getElementById("shapechange").style.width="100px";
            document.getElementById("shapechange").style.borderRadius="0%";
            document.getElementById("shapechange").style.transform="skew(20deg)";
            break;
        case 3:
            document.getElementById("shapechange").style.transform="none";
            document.getElementById("shapechange").style.borderRadius="0%";
            document.getElementById("shapechange").style.height="0px";
            document.getElementById("shapechange").style.width="0px";
            document.getElementById("shapechange").style.backgroundColor="transparent"
            document.getElementById("shapechange").style.borderTop="25px solid transparent";
            document.getElementById("shapechange").style.borderBottom="25px solid transparent";
            document.getElementById("shapechange").style.borderRight="50px solid gray";
            break;
        default:
            shapeChange=0;
            document.getElementById("shapechange").style.backgroundColor="gray"
            document.getElementById("shapechange").style.height="80px";
            document.getElementById("shapechange").style.width="80px";
            document.getElementById("shapechange").style.borderTop="0";
            document.getElementById("shapechange").style.borderBottom="0";
            document.getElementById("shapechange").style.borderRight="0";
            break;
    }
}
