import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';
import AllCom from './components/AllCom';
import Fab from './components/Fab';
import Ratingall from './components/Ratingall';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typhography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import { defaultTheme } from './theme';

function App() {
  
    return ( <>
      <ThemeProvider theme ={ defaultTheme }>
        <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: 'background.pink' }}>
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
              
              <Link href="/" color="secondary.dark">Home</Link>
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
          bgcolor: 'background.deepPurple',
          maxWidth: { md: 200 },
          padding: 2,
          boxShadow: 1,
          mr:1,
        }}
          
          >
          <SayHello />
        </Box>

        <Box sx={{ 
          bgcolor: 'background.indigo',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.deepOrange',
           }}
           >
         <SecondHello/>
        </Box>

        <Box sx={{ 
          bgcolor: 'background.blue',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.deepPurple',
          }}
          >
         <Allavatar/>
        </Box>

        <Box sx={{ 
          bgcolor: 'background.teal',
          maxWidth: { md: 460 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.paper',
          }}
          >
         <SignIn/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
        <Box sx={{ 
          bgcolor: 'background.cyan',
          maxWidth: { md: 360 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          }}
          >
          <Badge />
        </Box>

        <Box sx={{ 
          bgcolor: 'background.lightGreen',
          maxWidth: { md: 200 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
           }}
           >
         <AllCom />
        </Box>
          <Box sx={{
            bgcolor: 'background.blueGrey',
            boxShadow: 1,
            padding: 1,
          }}>
            <Fab />
          </Box>

          <Box sx={{
            bgcolor: 'Background.lime',
            boxShadow: 1,
            padding:1,
          }}> 
            <Ratingall />
          </Box>


      </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
          <p>Copyright © Tbazar 2021.</p>
        </Box>
      </Container>
      </ThemeProvider>
  


        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

