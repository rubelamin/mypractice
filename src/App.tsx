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
import HeaderBars from './components/HeaderBars';
import AlertInfo from './components/Alert';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import { defaultTheme } from './theme';

function App() {
  
    return ( <>
      <ThemeProvider theme ={ defaultTheme }>
        <CssBaseline />
          <Box >
              <HeaderBars />
          </Box>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', }}>

        <Grid container spacing={1}>

          <Grid item xs={12} md={2}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              bgcolor: 'background.deepPurple',
              padding: 2,
              boxShadow: 1,
              
              }}
              
              >
              <SayHello />
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={{ 
              bgcolor: 'background.indigo',
              
              padding: 2,
              boxShadow: 1,
              
              color: 'fontColor.deepOrange',
              }}
              >
              <SecondHello/>
            </Box>
          </Grid>

        <Grid item xs={12} md={2}>
          <Box sx={{ 
            bgcolor: 'background.blue',
            
            padding: 2,
            boxShadow: 1,
            
            color: 'fontColor.deepPurple',
            }}
            >
           <Allavatar/>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ 
            bgcolor: 'background.teal',
            
            padding: 2,
            boxShadow: 1,
            
            color: 'fontColor.paper',
            }}
            >
            <SignIn/>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ 
            bgcolor: 'background.cyan',
            
            padding: 2,
            boxShadow: 1,
            
            }}
            >
            <Badge />
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ 
            bgcolor: 'background.lightGreen',
            
            padding: 2,
            boxShadow: 1,
            
            }}
            >
            <AllCom />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{
            bgcolor: 'background.blueGrey',
            boxShadow: 1,
            padding: 1,
            }}>
            <Fab />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{
            bgcolor: 'Background.lime',
            boxShadow: 1,
            padding:1,
           }}> 
            <Ratingall />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ bgcolor: 'fontColor.paper' }}>
            <AlertInfo />
          </Grid>
      </Grid>
      </Box>
      

        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
          <p>Copyright © Tbazar 2021.</p>
        </Box>
      </Container>
      </ThemeProvider>
  


        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

