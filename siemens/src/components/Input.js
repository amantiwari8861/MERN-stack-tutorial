import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckboxComponent from './CheckBox';
import ButtonComponent from './Button';

import "./component.css"


function InputComponent() {
  const [email, setEmail] = React.useState('')
  const [password,setPassword]=React.useState('')
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Box>
      <div className='imgDiv'>
        <img src="https://www.siemens.com/img/svg/logo-dark-3958fff2.svg" className='imgStyle' alt='_blank'/>
      </div>
  
      <div>
         <FormControl  sx={{ m: 1.5 }} style={{width:'95%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount" style={{color:'#E2DFD2'}}>Email</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl  sx={{ m: 1.5 }} style={{width:'95%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" style={{color:'#E2DFD2'}}>Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <FormControl>
          <ButtonComponent email={email} password={password} />
        </FormControl><br/>
        <FormControl sx={{ m: 1.5 }}>
          <CheckboxComponent/>
        </FormControl>
      </div>
    </Box>
  );
}
export default InputComponent;