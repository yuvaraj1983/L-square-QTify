import React from 'react'
import LogoImage from "../../assets/logo.png"

function Logo() {
 
  return (
    <img style={{textAlign: 'center'}} sx={{alignItems: 'center'}} src={LogoImage} alt="logo" width={67} />
  )
}

export default Logo