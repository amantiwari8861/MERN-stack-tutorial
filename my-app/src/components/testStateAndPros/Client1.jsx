import React from 'react'
import H1comp from './H1comp'

let fruits=["Apple","Mango","Litchi","Banana","Strawberry","chocolate"]

const Client1 = () => {
  return fruits.map((f,i)=>{return <H1comp key={i} fruit={f}/>});
    /*{ <H1comp fruit={fruits[0]}/>
    <H1comp fruit={fruits[1]}/>
    <H1comp fruit={fruits[2]}/> }*/
}
console.log(fruits);//normal array
fruits.map((f,i)=>{return <H1comp key={i} fruit={f}/>})//this line will not change original array
console.log(fruits);//normal array
console.log(fruits.map((f,i)=>{return <H1comp key={i} fruit={f}/>}));

export default Client1





