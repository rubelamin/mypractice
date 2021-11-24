import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from "@mui/icons-material/Navigation";
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../theme';
import CssBaseline from '@mui/material/CssBaseline';


export default function() {
    return <>
        <ThemeProvider theme={ defaultTheme }>
            <CssBaseline />
            <Box>
                <Typography variant="h4">
                    Floating Action Button Showing here.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                            <Fab aria-label="add" sx={{ color: 'fontColor.teal' }}>
                                <AddIcon />
                            </Fab>
                            <Fab aria-label="edit" sx={{ color: 'fontColor.deepPurple' }}>
                                <EditIcon />
                            </Fab>
                            <Fab variant="extended">
                                <NavigationIcon />
                                Navigation
                            </Fab>
                            <Fab aria-label="like" sx={{ color: 'fontColor.pink' }}>
                                <FavoriteIcon />
                            </Fab>
                    </Box>
            </Box>
        </ThemeProvider>
    
    </>
}
