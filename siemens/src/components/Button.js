import * as React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';


function ButtonComponent(props) {
  const navigate = useNavigate();
  const { email, password } = props

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/v1/auth/login', {
      email,
      password
    }).then((res) => {
      console.log(res)
      navigate('/main')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <Button variant="contained" style={{width:'20vw',margin:'1.5vh',size:'medium' }} onClick={handleClick}>Login</Button>
  );
}

export default ButtonComponent;