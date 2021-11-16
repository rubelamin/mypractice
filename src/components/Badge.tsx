import React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

const StyledBadge = styled(Badge)(({ theme }) => ({ 
    '& .MuiBadge-Badge' : {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

export default function() {
    return <>
    <p>Badge Output Here</p>
    <Stack direction="row" spacing={2}>
        <Badge badgeContent={4}color="primary">
            <MailIcon />
        </Badge>
        <Badge badgeContent={2} color="secondary">
            <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={5} color="success">
            <MailIcon />
        </Badge>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={5} color="warning">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    </Stack>
    <p>Button Control Switch </p>
    <Box
        sx = {{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *' : {
                marginBottom: 2,
            },
            '& .MuiBadge-root' : {
                marginRight: 4,
            },
        }}
    >
        <div>
            
        </div>

    </Box>

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


    </>
}