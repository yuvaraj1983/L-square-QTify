import React from 'react'
import { Typography, colors } from '@mui/material';

import  "./HeroSection.module.css";
import heroimg from "../../assets/hero_headphones.png"

const HeroSection = () => {
    const typographysx = {
        fontSize: 35
    }
  return (
    <div className="hero" style={{backgroundColor: "#121212", height:"270px", width:"100vw", marginTop: "60px",display: 'flex', flexDirection:'row', alignItems: 'center', 
    justifyContent: 'center'}}>
       <div style={{display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center'}}>
             <Typography sx={typographysx} style={{color:'white'}}>100 Thousand Songs, ad-free</Typography>
             <Typography sx={typographysx}   style={{color:'white'}}>Over thousands podcast episodes</Typography>
       </div>
      <div>
        <img src={heroimg} alt="No Hero image found"  style={{width:"220px", height:"220px"}}/>
      </div>
    </div>
  )
}

export default HeroSection;