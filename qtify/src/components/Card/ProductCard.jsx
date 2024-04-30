import React from 'react'
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material'


const ProductCard = ({album, issong}) => {
  console.log('issong', issong)
  return (
    <>
 <Card sx={{  borderRadius: 2, marginRight: 2}}>
    <CardMedia
      sx={{ height: 230 }}
      image={album.image}
      title="green iguana"
    />
    <CardContent>
    {
      !issong ? <Chip sx={{background: '#121212', color: 'white', height:"20px"}} label={`${album.follows} follows`}/>
      :
      <Chip sx={{background: '#121212', color: 'white', height:"20px"}} label={`${album.likes} likes`}/>
    }
  
    </CardContent>
   
    
  </Card>
  <Typography sx={{textAlign: 'left', color:'white', background: '#121212'}} gutterBottom >
        {album.title}
  </Typography>
    </>
   
  
  )
}

export default ProductCard