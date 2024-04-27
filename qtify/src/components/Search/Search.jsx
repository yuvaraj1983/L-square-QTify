import React from 'react'
import { Button,  TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';





const Search = () => {
    const textboxsx = {
        marginLeft: "auto", 
        backgroundColor: 'white',
        borderRadius: 1,
         width: 400,
        // height:40
        
    }

    const iconbtnsx = {
       
        backgroundColor: 'white',
        borderRadius: 0.5,
        height:40,
        "&:hover": {
            backgroundColor: 'white',
          },
        
    }
  return (
    <> 
     <TextField  size="small"
           sx={textboxsx} id="outlined-basic" placeholder='Search a album of your choice'  />
             <Button sx={iconbtnsx} endIcon={<SearchIcon />}>
       
        </Button>
 
    
    </>
  

  )
}

export default Search