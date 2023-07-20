function fn(){
    if(document.getElementById("switch").checked==true)
  {
    console.log(document.getElementById("heading").innerHTML);
    document.getElementById("body").style.backgroundColor="black";
    document.getElementById("heading").style.color="white";
  }
  else
  {
    document.getElementById("body").style.backgroundColor="white";
    document.getElementById("heading").style.color="black";
  }
}