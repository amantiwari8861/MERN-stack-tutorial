import React from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {

    const param=useParams();

  return (
    <h1>Inside {param.topic} Details</h1>
  )
}

export default Display

