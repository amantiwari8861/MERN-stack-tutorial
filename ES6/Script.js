// alert("i am external ");

// let fruits=["strawberry","cherry","pineapple"]

// for (let i = 0; i < fruits.length; i++) 
// {
//     console.log(i+" "+fruits[i]);
// }
// for (const i in fruits)
// {
//     console.log(i);
// }
// for (const i of fruits)
// {
//     console.log(i);
// }

// fruits.forEach( e=>{
//     console.log(e);
// })

// Array.prototype.myFxn=function(){
//     for (let i = 0; i < this.length; i++) 
//     {
//         this[i]="The value at "+i+" is "+this[i];
//     }
// };

// fruits.myFxn();
// // console.log(fruits);
// console.log(fruits[0]);




//pre-defined fxn
// console.log(Math.pow(2,8));

//// no argument no return type
// function name() {
//     console.log("hello everyone!");
// }
// name();
// //no argument with return type
// function name2()
// {
//     return 500;
// }

// console.log(name2());
// //with argument no return type
// function name3(i)
// {
//     console.log("the value is "+i);
// }
// name3(5);
// //with argument and return type
// function name4(in1) {
    
//     return in1+500;
// }
// console.log(name4(51));


// let fxnvar=function abc(e){
//     console.log("hello bro");return e;
// }

// let fxnvar=function(e){//anonymous fxn
//     console.log("hello bro");return e;
// }

// let fxnvar=(e)=>{//arrow fxn
//     console.log("hello bro");return e;
// }

// abc(5); error

// console.log(fxnvar(21));

// function giveMessage(message) {
// 	let userMsg = message;
// 	function toUser(userName) {
// 		let name = userName;
// 		let greet = userMsg + " " + name;
// 		return greet;
// 	}
// 	userMsg = toUser("Bob");
// 	return userMsg;
// }
// console.log(giveMessage("The world says hello dear: "));
// The world says hello dear: Bob
