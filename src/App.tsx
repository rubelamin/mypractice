import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';
import AllCom from './components/AllCom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typhography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

function App() {
  
    return ( <>
      <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
            size="large" aria-label="open drawer" edge="start" color="inherit" sx={{ mr: 2}}>
              <MenuIcon />
            </IconButton>
            <Typhography component="div" variant="h6" noWrap
             sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              RBL Practice
            </Typhography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
              
              <Link href="/" color="inherit">Home</Link>
              <Link href="#" color="inherit">Link</Link>
            </Box>
            
          </Toolbar>
        </AppBar>
      </Box>
      </React.Fragment>
      
      
        <SayHello />
        
        <SecondHello/>
        <Allavatar/>
        <SignIn/>
        <Badge />
        <AllCom />


        <p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>
<p>................</p>

        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

