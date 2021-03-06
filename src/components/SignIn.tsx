import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typhography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function SignIn() {
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get('email'),
         password: data.get('password'),
      });
   };
   return <>
      <p>Sign In Page</p>

         <Container component="main" maxWidth="xs">
           
            <Box sx={{ 
               marginTop: 8, 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center',
               color: 'fontColor.paper',
               }}>
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typhography component="h1" variant="h5" sx={{ color: 'fontColor.paper' }}>
                  Sign In
               </Typhography>
               <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1 }}>
                  <TextField 
                     margin= "normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="email"
                     
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="password"
                     label="Password"
                     name="password"
                     autoComplete="current-password"
                     type="password"
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember Me"
                  />
                  <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                     Sign In
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2" sx={{ color: 'fontColor.paper' }}>
                           Forgot Password?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="#" variant="body2" sx={{ color: 'fontColor.paper' }}>
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
               </Box>

            </Box>
         
         </Container>
      
   </>
}
