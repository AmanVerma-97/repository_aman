document.addEventListener('keydown', ballMove);
function ballMove(event){
    event.preventDefault();
    let keycode=event.keyCode;
    let ball=document.getElementById("ball");
    let x=ball.getBoundingClientRect().left;
    let y=ball.getBoundingClientRect().top;
    switch(keycode){
        case 37: // Left arrow key
        x -= 40;
        break;
      case 38: // Up arrow key
        y -= 40;
        break;
      case 39: // Right arrow key
        x += 40;
        break;
      case 40: // Down arrow key
        y += 40;
        break;
    }
    if(x<0){
        x=window.innerWidth-100;    //if it reaches leftmost part of window, transport it to right
    }

    if(x>window.innerWidth-100){
        x=0;                        //if it reaches rightmost part of window, transport it to left.
    }

    if(y<0){
        y=window.innerHeight-101;   //if it raches top, transport it to bottom-most part.
    }

    if(y>window.innerHeight-101){   
        y=0;                         //if it reaches bottom, transport it to top-most part.
    }
    if(x==window.innerWidth/2 && y==window.innerHeight/2){
        alert("You reached center");
    }
    ball.style.left=x+"px";
    ball.style.top=y+"px";
}