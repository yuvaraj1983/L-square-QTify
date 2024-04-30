import React, {useEffect, useState} from 'react'
import {   Tabs, Tab, Box, Typography, colors}  from '@mui/material'
import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';
import { blue } from '@mui/material/colors';
import "./Tab.module.css";
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabComponent = ({gener, songs}) => {
   
     const [value, setValue] = useState('All');
     const [gen, setGen] = useState(gener.data);
     const [genresongs, setGenreSongs] = useState(songs);

     const tabsx = {
      color: 'white',
      backgroundColor:'black',
      "&:hover:active": {
        borderBottom: '3px solid #00BD2B'
      },
      // "&:hover": {
      //   borderBottom: '3px solid #00BD2B'
      // },
    };
    
    const handleChange = (event, newValue) => {
        let filteredSongs = [];
        setValue(gen[newValue].key)
  
       if(newValue === 0)
          filteredSongs = songs;
       else
          filteredSongs = songs.filter(song => song.genre.key === gen[newValue].key);
        setGenreSongs(filteredSongs);
      };


      useEffect(() => {
        if(gener && gener.data) {
           setGen([{key:"All", label:"All"},...gener.data]);
        setGenreSongs(songs)
        }
       
      },[gener])
  return (

    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Box >
      <Tabs value={value.toString()} onChange={handleChange} aria-label="basic tabs example"
      sx={{background: '#121212',  padding: "3px"}}>
        {
          gen && gen.length && 
                 gen?.map((genre, index) => {
                  return <Tab sx={tabsx} label={genre.label}  {...a11yProps(index)} />
                 })
        }
  
      </Tabs>
    </Box>

    {
       gen && gen.length && 
       gen?.map((genr, index) => (
        <CustomTabPanel  value={value}  key={genr.key} index={genr.key}> {/* Add key prop */}
        <Carousel albums={genresongs} issong={true} type='song' />
      </CustomTabPanel>
       ))
    }
   

  </Box>



  //   <Tabs 
  //   value={value}
  //   onChange={handleChange}
  //   sx={{background: '#121212', color:'white', padding: "10px"}}
  //   aria-label="secondary tabs example"
  // >
  //   <Tab sx={{color:'white'}} value="1" label="All" />
  //   {
  //       gen && gen.length && 
  //       gen?.map((genr, index) => {
        
  //        return   <Tab sx={{color:'white'}} value={genr.key} label={genr.label} />
  //       })
  //   }



  
  // </Tabs>
  )
}

export default TabComponent