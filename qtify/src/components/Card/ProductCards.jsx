import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import { Button, Grid, Typography, Tooltip } from '@mui/material'
import Carousel from '../Carousel/Carousel';
import TabComponent from '../TabComponent/TabComponent'

const ProductCards = ({type, label}) => {
  const [albums, setAlbums] = useState([]);
  const [newalbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const colorSX = {
    backgroundColor: '#121212',
    color: '#0FFFFFF'

  }

  useEffect(() => {
    if(type==="all") {
      axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then((res) =>{
    
       setAlbums(res.data);
      })
      .catch((err) => console.log(err));
    }
  else  if(type==="new") {
      axios.get('https://qtify-backend-labs.crio.do/albums/new')
      .then((res) =>{
    
      setNewAlbums(res.data);
      })
      .catch((err) => console.log(err));
    }
    else if(type==="song") {
      axios.get('https://qtify-backend-labs.crio.do/songs')
      .then((res) =>{
      console.log(res.data);
      setSongs(res.data);
    })
      .catch((err) => console.log(err));
    }
    axios.get('https://qtify-backend-labs.crio.do/genres')
    .then((res) => {
      setGenres(res.data)
    })
    .catch((err) => console.log(err));
    
  },[])

  return (
    <>
    {
    type === "all" ?
    <>
    <div style={{display: 'flex', flexDirection: 'row', padding:"20px",justifyContent:'space-between', background: '#121212'}}> 
      <Typography color='white' sx={{ fontSize:"20px"}}>{`${label}`}</Typography>
     
      <Button sx={{color:'#34C94B', textTransform:'none', fontSize:"20px"}}>Collapse</Button>
     
    </div>
      
      <Grid sx={{backgroundColor: '#121212'}} container  spacing={1}>
    
    {
      albums.map((alb) => (
   
    <Grid  sx={{padding:0.5}} item  columnSpacing={5} xs={6} md={2} key={alb._id}>
        <Tooltip title="Add" arrow placement="top">
        <ProductCard album={alb}  issong={false}/>
        </Tooltip>
          
         
     </Grid>
   ))
  }
      </Grid>
</> :

<>
    <div style={{display: 'flex', flexDirection: 'row', padding:"20px",fontSize:"50px", justifyContent:'space-between', background: '#121212'}}> 
      <Typography color='white'>
         { `${label}` }
       </Typography>
       {
        type === 'new' ? <Typography  color='#34C94B'>Show all</Typography> : null
       }
      
     
    </div>
      
      {
        type==='new' && <Carousel albums={type==='new'?newalbums:songs} issong={type==='new'?false:true} /> 
      } 

      {
        type==='song' && <TabComponent gener={genres} songs={songs} />
      }
  
 
</>
}
    </>
  
  )
}

export default ProductCards;