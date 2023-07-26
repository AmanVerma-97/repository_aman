let arr=[1,2,3,4,7,8,9];
let ans=arr.filter(isOdd);
console.log(ans);
function  isOdd(x){
    return x%2;
}

console.log("---------------------------");
console.log("---------------------------");

function change1(obj) {
    obj.name = "ninjas"
}
function change2(obj) {
    obj = {name: "changed"}
}
  
var obj = {name:"coding"}
  
change1(obj)
change2(obj)
console.log(obj.name) 

console.log("---------------------------");
console.log("----------DEEP COPY OF ARRAYS/OBJECTS------------");
console.log("--ARRAYS--")

let arr1=[1,2,3,"Aman"];
//Method 1 --> Spread Operator
let arr2=[...arr1];
arr2.push("Verma");
console.log(arr1); 
console.log(arr2); 

//Method 2 --> Map function
arr1.pop();
arr3=arr1.map(el=>el*3);
arr3.push("Verma");
console.log(arr1); 
console.log(arr3);

console.log("--OBJECTS--")
let obj1={1:"H", 2:"E"};
//Method 1 --> Spread Operator
let obj2={...obj1, 5:"M", 4:"L"};
obj2["3"]="R";
console.log(obj1); 
console.log(obj2); 

//Method 2 --> Inbuilt function
obj3=Object.assign({},obj1);
obj3["3"]="N";
console.log(obj1); 
console.log(obj3);

console.log("---------------------------");
console.log("----------ITERATING OVER STRING------------");
let path="ac";
for(const ch of path){
    console.log(ch);
}