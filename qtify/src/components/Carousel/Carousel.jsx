// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Grid, Tooltip } from '@mui/material'

import ProductCard from '../Card/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = ({albums, issong}) => {
  if(issong) {
    console.log('songs carousel')
  }
  return (


    <>
     <Grid  sx={{backgroundColor: '#121212'}} container  spacing={1}>
    
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
     
      slidesPerView={6}
      navigation
    
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       
        {
albums?.map((alb) => (
 
    <SwiperSlide key={alb._id}>
     <Grid item key={alb._id}>
      <ProductCard key={alb._id} album={alb} issong={issong}  />
    </Grid>
    </SwiperSlide>
 
)) 
        }
    
  
     
    </Swiper>
    </Grid>
  </>
    
  )
}

export default Carousel