import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from "@mui/icons-material/Navigation";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label' : 'Checkbox demo' } };

export default function() {
    return <>
       
            <Box>
                <Typography variant="h6">
                    Floating Action Button Showing here.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: 3,
            }}>
                <Fab aria-label="add" sx={{ bgcolor: 'fontColor.teal' }}>
                    <AddIcon />
                </Fab>
                <Fab aria-label="edit" sx={{ bgcolor: 'fontColor.deepPurple' }}>
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon />
                    Navigation
                </Fab>
                <Fab aria-label="like" sx={{ bgcolor: 'fontColor.pink' }}>
                    <FavoriteIcon />
                </Fab>
                
            </Box>
            <Box sx={{ mt: 2, }}>
                <p>Checkbox design </p>
                <Checkbox {...label} />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="warning" />
                <Checkbox {...label} defaultChecked color="primary" />
            </Box>
        
    
    </>
}
