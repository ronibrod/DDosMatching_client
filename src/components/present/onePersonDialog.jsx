import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

export default function OnePersonDialog({ open, onClose }) {
    //   const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth
                open={open}
                onClose={handleClose}
            >
                <Stack alignItems="center" justifyContent="center" >
                    <DialogTitle>David</DialogTitle>
                </Stack>

                <DialogContent sx={{ height: 500 }} >
                    <Stack direction="row" alignItems="center" justifyContent="center" >
                        <Grid item container justifyContent="center" variant="outlined" border={1} sx={{ width: "5%" }} py={2} >
                            <Grid item variant="outlined" border={1} >delete</Grid>
                            <Grid item variant="outlined" border={1} mt={2} >update</Grid>
                        </Grid>

                        <Grid item sx={{ width: "55%" }} variant="outlined" border={1} >
                            <Stack direction="row" >
                                <Grid item sx={{ width: "70%" }} variant="outlined" border={1} >
                                <Card variant="outlined" sx={{ width: "100%" }}>
                                    <Stack direction="row" >
                                        
                                            <Grid item sx={{ width: "50%" }} >
                                                <Grid item align="center" p={1} >מין: נקבה</Grid>
                                                <Grid item align="center" p={1} >name</Grid>
                                                <Grid item align="center" p={1} >phoneNum</Grid>
                                                <Grid item align="center" p={1} >age</Grid>
                                            </Grid>
                                            <Grid item sx={{ width: "50%" }} >
                                                <Grid item align="center" p={1} >address</Grid>
                                                <Grid item align="center" p={1} >dayofbirth</Grid>
                                                <Grid item align="center" p={1} >email</Grid>
                                                <Grid item align="center" p={1} >hieght</Grid>
                                            </Grid>
                                        
                                    </Stack>
                                    </Card>
                                </Grid>
                                <Grid item>image</Grid>
                            </Stack>

                            <Stack direction="row" variant="outlined" border={1} >
                                <Grid item sx={{ width: "50%" }} variant="outlined" border={1} >פרטים נוספים</Grid>
                                <Grid item>תגיות</Grid>
                            </Stack>
                        </Grid>
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}