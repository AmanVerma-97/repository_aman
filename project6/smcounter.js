const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText='0';
    
    const counterUpdate=()=>{
        const targetData= +counter.getAttribute('data-target');
        // '+' symbol before counter converts the resultant String data to Number.
        // console.log(targetData, typeof(targetData));

        const comapre=+counter.innerText;
        const speed=Math.ceil(targetData/200);  //increase speed.

        if(comapre<targetData){
            counter.innerText=`${comapre+speed}`;
            setTimeout(counterUpdate,25);
        }
        else{
            counter.innerText=targetData;
        }
    }
    counterUpdate();
})