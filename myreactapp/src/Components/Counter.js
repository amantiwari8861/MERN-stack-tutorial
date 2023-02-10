import React, { useState } from 'react'

const Counter = () => {
    const [count,incCount]=useState(0);
  return (
    <>
    <h1>Count :{count}  </h1>
    <button onClick={()=>incCount(count+1)}>Increment</button>
    </>
  )
}
export default Counter
