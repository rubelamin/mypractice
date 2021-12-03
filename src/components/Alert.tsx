import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


export default function AlertInfo() {
    return <>
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                    <Alert severity="error">This is an Error</Alert>
                </Stack>
                <Stack>
                    <Alert severity="warning">This is Warning</Alert>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                    <Alert severity="info">This is Info</Alert>
                </Stack>
                <Stack>
                    <Alert severity="success">This is Success</Alert>
                </Stack>
            </Grid>
        </Grid>
    </>
}