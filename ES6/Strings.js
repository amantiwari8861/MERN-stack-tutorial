// let str='Hello everyone';
// let str="Hello everyone";

// console.log(str);
// console.log(typeof str);

// let num1=55;

// let msg="the value of num is "+num1;

// console.log(msg);
// console.log(typeof msg);

// let n1=10,n2=20,n3=89;

// let msg2="n1="+n1+" n2="+n2+" n3="+n3;

// let msg2=` n1=${n1} n2=${n2} n3=${n3} `;//template string

// console.log(msg2);
// console.log(typeof msg2);

// let fname="AMan";
// let lname="Tiwari";
// let fullname=fname+lname;
// let fullname=fname.concat(lname);

// console.log(fullname);

// let len="Hello".length;
// console.log(len);

// console.log("Hello".length);

// console.log("hello ".concat("aman"," sir","!"));

// let msg = "Hello";//strings are immutable
// // msg.concat(" Aman Sir!");
// msg=msg.concat(" Aman Sir!"); //re-initialization

// console.log(msg);
// console.log(msg);

// let myStr = "Are you enjoying you r JavaScript?";
// console.log(myStr.match(/you/));

// console.log("string found at index position: " + myStr.match(/you/).index);
/*Returns:  string found at index position: 4*/

// let myStr = "Are you enjoying you r JavaScript?";
// console.log(myStr.match(/you/g));

// console.log("string found at index position: " + myStr.match(/you/).index);

// let myStr = "Are you enjoying you r JavaScript your?";
// let matches=[...myStr.matchAll(/you/g)];
// matches.forEach((match) => {
//     // console.log(match);
//     console.log("match found at " + match.index);
// })

// console.log(Array.from(myStr.matchAll(/you/g)).map(match => match.index));

// let myStr = "Are you enjoying JavaScript?"; 
// myStr = myStr.replace('you', 'they'); 
// console.log(myStr); 
// //Returns Are they enjoying JavaScript? 


let myString1 = "can you find it?"; 
console.log("Occurrence of find in statement1: "+myString1.search('find')); 
let myString2 = "Or you can not?"; 
console.log("Occurrence of find in statement2: "+myString2.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1*/ 

 let myString = "Hello World"; 
console.log("Split string based on spaces: "+myString.split(" ")); 
//Returns: Split of string based on spaces: Hello,World 

let myString = "Hello World"; 
console.log("Substring using 2 parameters: "+myString.substring(2,5)); 
console.log("Substring using 1 parameter: "+myString.substring(5)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/ 





