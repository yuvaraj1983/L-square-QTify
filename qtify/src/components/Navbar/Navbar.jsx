import React from 'react';

import Logo from "../Logo/Logo";
import Search from "../Search/Search";


import { AppBar, Toolbar} from "@mui/material"
import Button from "../Button/Button";



function Navbar() {

 

    return (
        <AppBar  sx={{backgroundColor: '#00BD2B', display: 'flex', flexDirection: 'column',  justifyContent: 'space-between'}}>
            <Toolbar>
                <Logo />
               <Search />

                <Button  />
            </Toolbar>
        </AppBar>
        // <nav>
          
        //     <Logo />
         
        // </nav>

    
    )
}

export default Navbar;