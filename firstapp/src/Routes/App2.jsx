import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Display from '../Head/Display'
import LoginForm from '../Head/LoginForm'
import Home2 from './Home2'

const App2 = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginForm/>} />
            <Route path='/home2/:name' element={<Home2/>} >
                <Route path="display/:topic" element={<Display/>}/>
            </Route>
            {/* <Route path="/display/:topic" element={<Display/>}/> */}
        </Routes>
    </div>
  )
}

export default App2
