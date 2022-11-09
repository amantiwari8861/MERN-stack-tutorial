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

let a1={
    name:"Aman",
    Age:23,
    "degree":"MCA",
    skills:["C","C++","java","python","Angular","spring"],
    address:{
        city:"delhi",
        country:"india"
    },
    showDetails: ()=>{
        console.log("hello everyone by "+this.name);
    },
    display()
    {
        console.log("hello everyone by "+this.name);
    }
};//an object
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
a1.showDetails();
a1.display()



// demo 2
//-------------states of the object--------- 
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberOfGears: 5,
    currentGear: 3,
    currentSpeed: 45,
    //-------------Behaviour of the object--------- 
    accelerate: function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    },
     
    brake: function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}

console.log(myCar.accelerate(55));
console.log(myCar.brake(30));