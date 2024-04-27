import React from 'react'
import  BtnNav  from '@mui/material/Button'

function Button()  {
  const buttonSX = {
    marginLeft: "auto",
    color: '#00BD2B',
    backgroundColor: '#121212',
    textTransform: 'none',
    "&:hover": {
      backgroundColor: '#121212',
    },
  };

  return (
   
    <BtnNav variant='button' sx={buttonSX}>Give Feedback</BtnNav>
  )
}

export default Button;