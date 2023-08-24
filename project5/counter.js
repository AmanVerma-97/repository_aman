//To run the counter in case of proper value.
//I disable the input box and button to avoid un-necessary intervation till counter works.
//They will be enabled once counter finishes the count.

const trigger=document.getElementById("count");
trigger.addEventListener('click',startCounter);

const inputBox=document.getElementById("count-input");

function startCounter(){
    document.getElementById("result3").innerHTML='';
    document.getElementById("result2").innerHTML='';
    document.getElementById("result1").innerHTML='';
    
    let val=document.getElementById("count-input").value;
    document.getElementById("count-input").value='';
    
    inputBox.disabled=true;
    trigger.disabled=true;

    if(!val){
        alert("Enter a value to start counter!");
        inputBox.disabled=false;
        trigger.disabled=false;
        return;
    }
    if(val>=1000){
        alert("Value must be less than 1000[0-999]");
        document.getElementById("count-input").value='';
        inputBox.disabled=false;
        trigger.disabled=false;
        return;
    }
    else if(val>=100){
        setTimeout(()=>{
            inputBox.disabled=false;
            trigger.disabled=false;
        },500*val);
        for(let i=1;i<=val;i++){
            
            if(i<10){
                setTimeout(()=>{
                    document.getElementById("result3").innerHTML=i;
                },500*i);
            }
            else if(i>=10 && i<100){
                setTimeout(()=>{
                    var first=i%10;
                    var second=Math.floor(i/10);
                    document.getElementById("result3").innerHTML=first;
                    document.getElementById("result2").innerHTML=second;
                },500*i);
            }
            else{
                setTimeout(()=>{
                    var temp=i;
                    var first=temp%10;
                    temp=Math.floor(temp/10);
                    var second=temp%10;
                    temp=Math.floor(temp/10);
                    var third=temp;
                    document.getElementById("result3").innerHTML=first;
                    document.getElementById("result2").innerHTML=second;
                    document.getElementById("result1").innerHTML=third;
                },500*i);
            }
        }
    }
    else if(val>=10 && val<100){
        setTimeout(()=>{
            inputBox.disabled=false;
            trigger.disabled=false;
        },500*val);
        for(let i=1;i<=val;i++){
            if(i<10){
                setTimeout(()=>{
                    document.getElementById("result3").innerHTML=i;
                },500*i);
            }
            else{
                setTimeout(()=>{
                    var first=i%10;
                    var second=Math.floor(i/10);
                    document.getElementById("result3").innerHTML=first;
                    document.getElementById("result2").innerHTML=second;
                },500*i);
            }
        }

    }
    else{
        setTimeout(()=>{
            inputBox.disabled=false;
            trigger.disabled=false;
        },500*val);
        for(let i=1;i<=val;i++){
            first=setTimeout(()=>{
                document.getElementById("result3").innerHTML=i;
            },500*i)
        }
    }
}
