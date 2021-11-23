import React from 'react';
import Typhography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../theme';


export default function() {
    return <>
        <ThemeProvider theme = { defaultTheme } >
            <Typhography variant="h3">
                Hello Bagha vai!
            </Typhography>
        </ThemeProvider>

    </>
}