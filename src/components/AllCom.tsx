import React from 'react';
import Box from '@mui/material/Box';
import Typhography from '@mui/material/Typography';
import { green, red, orange } from '@mui/material/colors';

export default function () {
    return <>
        <Box mt={2}>
            <Typhography sx={{ bgcolor: green[500], color: red[900] }}>
                Bangladesh
            </Typhography>
            <Typhography sx={{ color: red[500] }}>
                Cricket Team
            </Typhography>
            <Typhography sx={{ color: orange[500] }}>
                Football
            </Typhography>
        </Box>
    </>
}