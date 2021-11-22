import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AvatarGroup  from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


function stringToColor (string: string){
   let hash = 0;
   let i;
   for (i = 0; i < string.length; i +=1 ) {
      hash = string.charCodeAt(i) + ((hash << 5 ) - hash );
   }
   let color = '#';

   for ( i = 0; i < 3; i += 1){
      const value = ( hash >> ( i * 8)) & 0xff;
      color = `00${value.toString(16)}`.substr(-2);
   }
   return color;
}
function stringAvatar(name: string){
   return {
      sx: {
         bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
   };
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

export default function() {
    return <> 
     <h2> Avatar</h2>
        <p>User Name</p>
        <Stack direction="row" spacing={2}>
        <Avatar alt="First User" src="https://cdn.lifehack.org/wp-content/uploads/2015/08/chrishemsworth.jpg" />
         <Avatar alt="Second User" src="https://cdn.luxe.digital/media/2019/09/12085259/dressy-smart-casual-men-style-luxury-luxe-digital.jpg" />
         
        </Stack>
        <p>Letter Avatar</p>
         
         <Stack direction="row" spacing={2}>
         <Avatar>R</Avatar>
         <Avatar sx={{ bgcolor: deepOrange[500] }}>Ba</Avatar>
         <Avatar sx={{ bgcolor: deepPurple[500] }}>Uz</Avatar>
         </Stack>
         <p>Double Letter</p>
         <Stack direction="row" spacing={2}>
         <Avatar {...stringAvatar('Kent Dodds')}/>
         <Avatar {...stringAvatar('Rubel Amin')}/>
         <Avatar {...stringAvatar('Ali Hasan')}/>
      </Stack>
      <p>In Sizes</p>
      <Stack direction="row" spacing={2}>
          <Avatar 
            alt="Rony Mack"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
            />
            <Avatar alt="Main Pic" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar
                alt="Bagha Vai"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}

            />
      </Stack>
      <p>Icon Avatars</p>
      <Stack direction="row" spacing={2}>
          <Avatar>
              <FolderIcon/>
          </Avatar>
          <Avatar sx={{ bgcolor: pink[500]}} variant="square">
              <PageviewIcon/>
          </Avatar>
          <Avatar sx={{ bgcolor: green[500]}} variant="rounded">
              <AssignmentIcon/>
          </Avatar>
      </Stack>
      <p>Avatar Group</p>
      <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>    

    <p>Styled Badge</p>  
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        }
      >
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      </Badge>
      <Badge badgeContent={4} color="secondary">
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
          <AssignmentIcon/>
          </Avatar>
      </Badge>
    </Stack>  
         
     </>
}