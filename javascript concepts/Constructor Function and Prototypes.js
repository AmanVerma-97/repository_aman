function createStudent(name, age, rollNo){
    let student={};
    student.name=name;
    student.age=age;
    student.rollNo=rollNo;
    return student;
}

let student1=createStudent("A",20,1);
let student2=createStudent("B",21,2);
let student3=createStudent("C",20,3);
let student4=createStudent("D",19,4);    //4 students created using functions that contains an object.
console.log(student1);

//Using METHOS as CONSTRUCTORS

function Students(name, age, rollNo){
    
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
    
}

let students1=new Students("A",20,1); //calling in constructor mode.
let students2=new Students("B",21,2);
let students3=new Students("C",20,3);
let students4=new Students("D",19,4);    //4 students created using constructors.
console.log(students3);

//NEED FOR PROTOTYPE: un-necessary copies of function are passed to each object of function 

function Vehicle(wheels,price){
    this.wheels=wheels;
    this.price=price;
    this.getPrice=function(){
        console.log(this.price);
    }
}

let vehicle1=new Vehicle(4, 500000);
let vehicle2=new Vehicle(2,50000);
let vehicle3=new Vehicle(3,250000);
console.log(vehicle1, vehicle2, vehicle3); //each object has a copy of getPrice function.


//since each object creates it's own copy of function, it creates a lot of wastage of memory.

/*Javascript creates a function prototype for any function that you create. 
Although the prototype created becomes useful when we use the function as a constructor, it is created for all the functions.*/ 

//For every object of this function, 2 copies are created- one for function and one for prototype. 

//function.prototype takes you to prototype and prototype.constructor takes you to back to function.

/*Whenever a function is created, a SINGLE copy of the associated function prototype is created too. 
  All the objects created using this constructor function share the same function prototype. 
  A new prototype is NOT created for every instance of the object.*/

  
function Vehicles(wheels,price){
    this.wheels=wheels;
    this.price=price;
}

Vehicles.prototype.getPrice=function(){  //a common copy for all objects is created inside prototype.
    console.log(this.price);
}

let vehicles1=new Vehicles(4, 500000);
let vehicles2=new Vehicles(2,50000);
let vehicles3=new Vehicles(3,250000);
console.log(vehicles1, vehicles2, vehicles3);

vehicles1.getPrice();   //each object can access the copy present in prototype and values are assigned 
                       //based on object's value which makes the call
vehicles2.getPrice();

//we can add properties/behaviour at run-time in javascript to prototypes that we want to be available for all objects.

Vehicles.prototype.company="Honda";
console.log(vehicles1.company); // company name - common property for all vehicles added to prototype.



//EXAMPLE - PREDICT OUTPUT AND THEN RUN
function Person(name) {
    this.name = name;
  }
var p1 = new Person("Joy");
var p2 = new Person("Julie");
  
Person.prototype.getName = function() { return this.name };
  
p1.getName = function() {return 'John'};
console.log(p1.getName() + " is friend with " + p2.getName());
p2.getName = function() {return 'Jonson'};


//TO CHECK THE PROTOTYPE ASSOCIATED WITH OBJECT.
console.log(Object.getPrototypeOf(vehicles1));
console.log(Vehicles.prototype);  //constructor function prototype
console.log(Object.getPrototypeOf(vehicles2)===Vehicles.prototype);
console.log(Vehicles.prototype.isPrototypeOf(vehicles3)); //checks if both point to same prototype.

console.log(vehicles1.hasOwnProperty('price'));     //true if property belongs to object, false if it belongs to prototype.
console.log(vehicles1.hasOwnProperty('getPrice'));


//PROTOTYPE CHAINING EXAMPLE
function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red" ;
B.prototype.color = "red" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);

/*Explanation: 

The obj1 has a property color of blue, so it doesn’t check for the value up the prototype chain. 

The obj2 doesn’t have a property color, so it looks up in the prototype chain in its prototype, and a red value gets assigned to it. 

The obj3 made using Object() directly inherits the color value pink from its prototype as it has no color property. 

The obj4 has no property color, so it looks up in the prototype chain in the function prototype, 
which also doesn’t have a property color. So it looks further up in the chain in the Object function, 
then in Object.prototype and assigns pink color. */