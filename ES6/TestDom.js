// let clarr=document.getElementsByClassName("head");

// let clarr=document.getElementsByName("para");
// let clarr=document.getElementsByTagName("h1");
// clarr[2].style.color="red";

// let pobj=document.querySelector("p");
// let pobj=document.querySelector("#p1");
// let pobj=document.querySelector(".p2");

// pobj.style.color="green";
// pobj.style.bac="green";


// let pObjarr=document.querySelectorAll(".head");

// pObjarr[1].style.backgroundColor="Yellow";


// let arr=document.body.childNodes;

// console.log(arr.length+" "+arr);
// for (const obj of arr) 
// {
//     console.log(obj);
// }

let arrobj=document.querySelectorAll(".head");
// arrobj[2].innerText="Hiiii </br> hello";
// arrobj[2].innerHTML="Hiiii </br> aman";
// arrobj[2].innerHTML="<mark>Hello";
// arrobj[2].innerHTML+=" Aman </mark>";

let mrk=document.createElement("mark");
mrk.innerText="Hello Aman Tiwari";

arrobj[2].append(mrk);
arrobj[2].append("Hii bro");
// arrobj[2].appendChild(mrk);
// .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects 





















