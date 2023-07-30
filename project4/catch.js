let box=document.getElementById("box");
box.addEventListener('mouseover',moveBox);
function moveBox(){
    let x=box.getBoundingClientRect().left;
    let y=box.getBoundingClientRect().top;
    let moveX=Math.floor(Math.random()*500);
    let moveY=Math.floor(Math.random()*500);
    
    if(x<150){
        x=x+moveX+100;
    }
    else if(x>window.innerWidth-150){
        x=x-moveX;
    }
    else{
        x=x+moveX;
    }
    if(y<150){
        y=y+moveY+100;
    }
    else if(y>window.innerHeight-150){
        y=y-moveY;
    }
    else{
        y=y+moveY;
    }

    if(x>(window.innerWidth-150)){
        x=0;
    }

    if(y>(window.innerHeight-150)){
        y=0;
    }
    box.style.left=x+"px";
    box.style.top=y+"px";
}