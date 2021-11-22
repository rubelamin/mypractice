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
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  
    return ( <>
      <React.Fragment>
        <CssBaseline />
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

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', }}>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: '#cfe8fc',
          maxWidth: { md: 200 },
          padding: 2,
          boxShadow: 1,
          mr:1,
        }}
          
          >
          <SayHello />
        </Box>

        <Box sx={{ 
          bgcolor: 'background.paper',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
           }}
           >
         <SecondHello/>
        </Box>

        <Box sx={{ 
          bgcolor: '#dddddd',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          }}
          >
         <Allavatar/>
        </Box>

        <Box sx={{ 
          bgcolor: '#dddddd',
          maxWidth: { md: 460 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          }}
          >
         <SignIn/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
        <Box sx={{ 
          bgcolor: '#dddddd',
          maxWidth: { md: 360 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          }}
          >
          <Badge />
        </Box>

        <Box sx={{ 
          bgcolor: '#dddddd',
          maxWidth: { md: 200 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
           }}
           >
         <AllCom />
        </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
          <p>Copyright © Tbazar 2021.</p>
        </Box>
      </Container>
      </React.Fragment>
  


        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

