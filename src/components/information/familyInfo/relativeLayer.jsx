import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function relativeLayer({ relative }) {
    return (
        <React.Fragment>
            <Grid container mt={5} justifyContent="center" alignItems="center">
                <Typography variant="h5" gutterBottom>
                    {relative}
                </Typography>
            </Grid>
            <Grid container spacing={3} xs={4}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="שם פרטי"
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="שם משפחה"
                        variant="filled"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}