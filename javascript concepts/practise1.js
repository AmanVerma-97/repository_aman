//Uncomment 1 question at a time to see the result.

// 1. Custom Asynchrony

/*Given a function randomAsyncFunction() which completes after an unknown amount of time and does not return a promise. 
Write a function asyncWithCallback() that will take a callback function and will call the randomAsyncFunction() 
and the callback() will be executed only after the randomAsyncFunction() is completed.*/

console.log("Solution 1");
function randomAsyncFunction() {
    const time = Math.floor(Math.random * 100)
    const x = setTimeout(() => {
      console.log('finished!!')
    },time)
}
   
async function asyncWithCallback(callback) {
    randomAsyncFunction()
    setTimeout(() => {
        callback()
    },1000)
}
   
asyncWithCallback(() => {
    console.log("fsdfsa")
})
  


//  2. Timer
/*Create a simple counter function, which when called will return two functions: start() and stop().
    Use those functions to start the counter and stop them. The start() function should start printing 
    0 …. N - 1 with one second delay between every logs. The stop() should pause the counter. 
    Use setTimeout() and Promises to do this. */

console.log("Solution 2");
let count = counter()

function counter(){
    let loop;
    return{
        start:function(){
           var val=0;
           loop=setInterval(()=>{
                const count=new Promise((resolve,reject)=>{
                resolve(val);
            });
            count.then((data)=>{
               console.log(data); 
            });
            val++;
           },1000);
        },
        stop:function(){
           clearInterval(loop); 
        }
    }
}
count.start()
setTimeout(() => {
    count.stop()
},6000);  //here we treat value of n as 6.



//  3. Promise Chaining

/*  Create a program to display promise chaining where each promise a
    has a resolve or reject condition.  */

console.log("Solution 3");
var loggedIn=true;
var userMessage="My message";
var userFriend="Sahil";

function checkUserLoggedInfo(){
    var promise1=new Promise((resolve,reject)=>{

        setTimeout( () => {
            if(loggedIn){
                resolve("Login success");
            }
            else{
                reject("Login Failure");
            }
        },1000);
    });
    return promise1;
}

function checkUserMessage(){
    var promise2=new Promise((resolve, reject)=>{

        setTimeout( () => {
            if(loggedIn){
                resolve(userMessage);
            }
            else{
                reject("Message Failure");
            }
        },1500);
    });
    return promise2;
}

function checkUserFriend(){
    var promise3=new Promise((done, undone)=>{  //name can be anything

        setTimeout( () => {
            if(loggedIn){
                done(userFriend);
            }
            else{
                undone("Friend Failure");
            }
        },2000);
    });
    return promise3;
}

checkUserLoggedInfo().then(message1 => {
    console.log("Login message: " + message1);
    checkUserMessage().then(message2 => {
        console.log("Message message: " + message2);
        checkUserFriend().then(message3 => {
            console.log("Friend message: " + message3);
          }).catch(error => {
            console.log(error);
        });
      }).catch(error => {
        console.log(error);
    });
  }).catch(error => {
    console.log(error);
});