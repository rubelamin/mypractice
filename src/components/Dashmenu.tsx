import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export default function() {
    
    return <>
     
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar />
        <Box sx={{
                overflow: 'auto',
            }}>
                <List>
                    {['Dashboard', 'Orders', 'Customers', 'Reports', 'Integrations'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 && <DashboardIcon /> }
                                {index === 1 && <ShoppingCartIcon />}
                                {index === 2 &&  <GroupIcon />}
                                {index === 3 &&  <BarChartIcon />}
                                {index === 4 &&  <LayersIcon />}
                                {index === 5 && <AssignmentIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ) )}
                </List>
                <Divider />
                <List>
                    {['Inbox', 'Settings', 'Log Out'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                            {index === 0 && <MailIcon /> }
                            {index === 1 && <SettingsIcon /> }                           
                            {index === 2 && <LogoutIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>

                    ))}
                </List>

            </Box>
        </Drawer>
           
       
    </>



}