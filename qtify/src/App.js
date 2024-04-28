import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import { Grid , Divider} from '@mui/material'
import Carousel from './components/Carousel/Carousel';

import ProductCards from './components/Card/ProductCards';

function App() {
  return (
    <> 
      
      <Navbar />
      <HeroSection />
      <ProductCards type="all" />
      <Divider sx={{background: '#00BD2B'}} />
      <ProductCards type="new" />
      <Carousel />
    </>
  
  )
}

export default App