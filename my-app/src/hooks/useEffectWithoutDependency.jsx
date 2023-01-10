import React, { useEffect, useState } from 'react'

const UseEffectWithoutDependency = () => {

  const [count,setCountValue]=useState(0);
  const [name,setName]=useState("");

  useEffect(()=>{
    console.log("hii i am use effect "+count+" name="+name);
  },[count])

  return (
    <>
    <h1>The value of count = {count}</h1>
    <button onClick={()=>setCountValue(count+1)}>Update count</button>
    <br />
    <h1>The value of name = {name}</h1>
    <button onClick={()=>setName("Aman"+count)}>Update Name</button>
    <br />
    </>
  )
}

export default UseEffectWithoutDependency

//useeffect ran on component loading time,