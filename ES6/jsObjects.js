// let sum=  ()=> console.log("hello bro");//storing arrow fxn in variable
// sum()//calling of fxn
// let sum2= function (){ console.log("hiiii")} //storing anonymous fxn in variable
// sum2()//calling of fxn
// let sum3= function abc(){ console.log("hiiii by named fxn")} //storing anonymous fxn in variable
// sum3()//calling of fxn
// function greet1() {
//     console.log("good night");  
// }
// let xyz=greet1;// storing function callback in variable
// xyz()//calling of fxn

// let a1={
//     name:"Aman",
//     Age:23,
//     "degree":"MCA",
//     skills:["C","C++","java","python","Angular","spring"],
//     address:{
//         city:"delhi",
//         country:"india"
//     },
//     showDetails: ()=>{
//         console.log("hello everyone by "+this.name);
//     },
//     display()
//     {
//         console.log("hello everyone by "+this.name);
//     }
// };//an object
// console.log(a1);
// console.log("The age of "+a1.name+" is "+a1.Age);
// console.log(a1.degree);
// console.log(a1.skills);
// console.log(a1[age]);//error
// console.log(a1[degree]);//error
// console.log(a1["degree"]);
// console.log(a1["Age"]);
// console.log(a1["age"]);

// console.log(a1.skills[1]);
// console.log(a1["skills"][1]);
// console.table(a1);
// console.log(a1["address"]["city"]);
// console.log(a1["address"]["country"]);
// console.log(a1.address.city);
// a1.showDetails();
// a1.display()



// // demo 2
// //-------------states of the object--------- 
// let myCar = {
//     name: "Fiat",
//     model: "VXI",
//     color: "red",
//     numberOfGears: 5,
//     currentGear: 3,
//     currentSpeed: 45,
//     //-------------Behaviour of the object--------- 
//     accelerate: function (speedCounter) {
//         this.currentSpeed = this.currentSpeed + speedCounter;
//         return this.currentSpeed;
//     },
     
//     brake: function (speedCounter) {
//         this.currentSpeed = this.currentSpeed - speedCounter;
//         return this.currentSpeed;
//     }
// }

// console.log(myCar.accelerate(55));
// console.log(myCar.brake(30));


// let name="Arnold"; 
// let age=65; 
// let country="USA"; 
// let obj={name,age,country}; 

// console.log(obj);

//Literal property without shorthand 
// function createCourse(name, status) {
//     return {type: "JavaScript", name: name, status: status};
// }
// function reviewCourse(name) {
//     return {type: "JavaScript", name: name};
// }
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
// function createCourse(name, status) {
//     return {type: "JavaScript", name, status};
// }
// function reviewCourse(name) {
//     return {type: "JavaScript", name};
// }

// console.log(createCourse("java","50%"));
// console.log(reviewCourse("adv. java"));

// let personalDetails = {
//     name: "Stian Kirkeberg",
//     country: "Norway"    
// };
// let dynamicProperty = "age";
// personalDetails[dynamicProperty] = 45;
// personalDetails["phone"]=9891062743;
// console.log(personalDetails.age);//Output: 45 
// console.log(personalDetails);

// let dynamicProperty = "age";
// let personalDetails = {
//     name: "Stian Kirkeberg",
//     country: "Norway",
//     [dynamicProperty]: 45,
//     dynamicProperty: 45
// };
// console.log(personalDetails.age);//Output: 45 
// console.log(personalDetails);

function Car(name, model, color, numberOfGears, currentSpeed, currentGear) { 
        //-------------States of the object--------- 
        this.name = name; 
        this.model = model; 
        this.color = color; 
        this.numberOfGears = numberOfGears;
        this.currentSpeed = currentSpeed; 
        this.currentGear = currentGear; 
        //-------------Behaviour of the object--------- 
        this.accelerate = function (speedCounter) {
            this.currentSpeed = this.currentSpeed + speedCounter; 
            return this.currentSpeed; 
        }
        this.brake = function (speedCounter) { 
            this.currentSpeed = this.currentSpeed - speedCounter; 
            return this.currentSpeed; 
        } 
        console.log("Hello");
    } 
    let myCar=new Car("bugati","bugati veygon","black",8,150,3);
    console.log(myCar);
    console.log(myCar.model);
    console.log(myCar.accelerate(50));
    console.log(myCar.brake(150));
    console.log(myCar["accelerate"](50));//invokes accelerate() with argument = 50 
   Car("bugati","bugati veygon","black",8,150,3);