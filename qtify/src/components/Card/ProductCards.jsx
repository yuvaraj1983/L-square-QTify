import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import { Button, Grid, Typography } from '@mui/material'

const ProductCards = ({type}) => {
  const [albums, setAlbums] = useState([]);
  const [newalbums, setNewAlbums] = useState([]);
  const colorSX = {
    backgroundColor: '#121212',
    color: '#0FFFFFF'

  }

  useEffect(() => {
    if(type==="all") {
      axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then((res) =>{
       console.log(res.data);
       setAlbums(res.data);
      })
      .catch((err) => console.log(err));
    }
  else  if(type==="new") {
      axios.get('https://qtify-backend-labs.crio.do/albums/new')
      .then((res) =>{
      console.log(res.data);
      setNewAlbums(res.data);
      })
      .catch((err) => console.log(err));
    }
  },[albums, newalbums])

  return (
    <>
    {
    type === "all" ?
    <>
    <div style={{display: 'flex', flexDirection: 'row', padding:"20px",justifyContent:'space-between', background: '#121212'}}> 
      <Typography color='white' sx={{ fontSize:"20px"}}>Top Albums</Typography>
      {/* <Typography color='#34C94B' variant='button'></Typography> */}
     <Button sx={{color:'#34C94B', textTransform:'none', fontSize:"20px"}}>Collapse</Button>
    </div>
      
      <Grid sx={{backgroundColor: '#121212'}} container  spacing={1}>
    
    {
    
      albums.map((alb) => (
    
    <Grid sx={{padding:0.5}} item  columnSpacing={5} xs={6} md={2} key={alb._id}>
          <ProductCard album={alb}  />
         
     </Grid>
   ))
  }
      </Grid>
</> :

<>
    <div style={{display: 'flex', flexDirection: 'row', padding:"20px",fontSize:"50px", justifyContent:'space-between', background: '#121212'}}> 
      <Typography color='white'>New Albums</Typography>
      <Typography color='#34C94B'>Show all</Typography>
     
    </div>
      
      <Grid sx={{backgroundColor: '#121212'}} container  spacing={1}>
    
    {
    
    newalbums.map((alb) => (
    
    <Grid sx={{padding:0.5}} item  columnSpacing={5} xs={6} md={2} key={alb._id}>
          <ProductCard album={alb}  />
         
     </Grid>
   ))
  }
      </Grid>
</>
}
    </>
  
  )
}

export default ProductCards;