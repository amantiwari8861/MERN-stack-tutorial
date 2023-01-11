import React from 'react'
import AppBar from "../components/AppBar"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import dayjs, { Dayjs } from 'dayjs';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormHelperText from '@mui/material/FormHelperText';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';

import "./ScreenOne.css"

function valuetext(value) {
  return `${value}mm`;
}
const marks = [
  {
    value: 0,
    label: '0mm',
  },
  {
    value: 250,
    label: '250mm',
  },
  {
    value: 500,
    label: '500mm',
  },
  {
    value: 750,
    label: '750mm',
  },
  {
    value: 1000,
    label: '1000mm',
  }
];
function ScreenOne() {
  const [value, setValue] = React.useState('')
  return (<div style={{backgroundColor:"#F4F6F9"}}>
 
      <AppBar/>
      <center>
        <br/><br/>
      <Box  
  justifyContent="center"
  alignItems="center"
  sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          width: 1000,
          
        }}>
        <br/>
        <br/>
      <div className='imgDiv'>
        <h3>Transport PR creation</h3>
      </div>
      <br/>
         <FormControl  sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Project Name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
           // value={email}
           // onChange={handleEmailChange}
          />
        </FormControl>
        <FormControl  sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" >WBS</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end">
           
              </InputAdornment>
            }
            //value={password}
            //onChange={handlePasswordChange}
          />
        </FormControl>
        <FormControl  sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Siemens PO Number</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end">
           
              </InputAdornment>
            }
            //value={password}
            //onChange={handlePasswordChange}
          />
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1.5 }} style={{width:'98%'}}>
        <InputLabel id="demo-simple-select-standard-label">Pick up from</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         // value={age}
         // onChange={handleChange}
          label="Pick up from"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1.5 }} style={{width:'98%'}}>
        <InputLabel id="demo-simple-select-standard-label">Delivery Address</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         // value={age}
         // onChange={handleChange}
          label="Pick up from"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl  sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Consignment</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end">
           
              </InputAdornment>
            }
            //value={password}
            //onChange={handlePasswordChange}
          />
        </FormControl>

        <FormControl sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">
        <InputLabel htmlFor="filled-adornment-weight">Weight</InputLabel>
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
           </FormControl>
           Length
           <FormControl sx={{ m: 1.5 }} style={{width:'95%'}} variant="filled">
           <Slider
        getAriaLabel={() => 'Length'}
        orientation="horizontal"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        valueLabelDisplay="auto"
        marks={marks}
      />
           </FormControl>
           Breadth
           <FormControl sx={{ m: 1.5 }} style={{width:'95%'}} variant="filled">
           <Slider
        getAriaLabel={() => 'Breadth'}
        orientation="horizontal"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        valueLabelDisplay="auto"
        marks={marks}
      />
           </FormControl>
           Height
           <FormControl sx={{ m: 1.5 }} style={{width:'95%'}} variant="filled">
           <Slider
        getAriaLabel={() => 'Height'}
        orientation="horizontal"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        valueLabelDisplay="auto"
        marks={marks}
      />
           </FormControl>
           
           <FormControl sx={{ m: 1.5 }} style={{width:'98%'}} variant="filled">

           <LocalizationProvider dateAdapter={AdapterDayjs}>

  <DateTimePicker
     renderInput={(props) => <TextField {...props} />}
    label="Vehicle require on"
   value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
  />
  
</LocalizationProvider>
</FormControl>
<FormControl variant="filled" sx={{ m: 1.5 }} style={{width:'98%'}}>
        <InputLabel id="demo-simple-select-standard-label">Delivery Urgency</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         // value={age}
         // onChange={handleChange}
          label="Pick up from"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Normal</MenuItem>
          <MenuItem value={20}>Urgent</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1.5 }} style={{width:'98%'}}>
        <InputLabel id="demo-simple-select-standard-label">Mode Of Dispatch</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
         // value={age}
         // onChange={handleChange}
          label="Mode Of Dispatch"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Air</MenuItem>
          <MenuItem value={20}>Surface</MenuItem>
        </Select>
      </FormControl>
      <FormControl  sx={{ m: 1.5 }} style={{width:'98%'}}>
      <Button variant="contained" 
      //style={{width:'31vw',margin:'1.5vh'}} 
     // onClick={handleClick}
     >
        Submit</Button>
        </FormControl>
        </Box>
        </center>
        <br/>
        <br/>
  </div>)
}

export default ScreenOne