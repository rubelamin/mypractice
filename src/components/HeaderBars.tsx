import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function(){

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return <>
        <AppBar position="fixed" sx={{ 
          bgcolor: 'background.pink',
           zIndex: (theme) => theme.zIndex.drawer + 1,
           }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: 'flex', }}>
              <IconButton 
              size="large" aria-label="open drawer" edge="start" color="inherit" sx={{ mr: 2}}>
                <MenuIcon />
              </IconButton>
              <Typography component="div" variant="h6" noWrap
              sx={{ display: {xs: 'none', md: 'flex' } }}
              >
                RBL Practice
              </Typography>
                
              </Box>
              
              <Typography component="div" variant="h6" noWrap
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                RBL Practice
              </Typography>
              
              
              <Box sx={{ flexGrow: 0, }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p:0, }}>
                  <Avatar>
                    U
                  </Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px', }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} >
                      <Typography>{setting}</Typography>
                    </MenuItem>
                  ))}
                  
                </Menu>
                
              </Box>
              
            </Toolbar>
          </Container>
        </AppBar>
    </>
}
