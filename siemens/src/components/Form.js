import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputComponent from "./Input";
import "./component.css"

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 400,
        },
        justifyContent: 'center',
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={3} style={{marginTop:'100px'}} className='formBack'>
          <InputComponent />
      </Paper>
    </Box>
  );
}