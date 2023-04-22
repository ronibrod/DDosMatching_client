
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/joy/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Slider from '@mui/joy/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function SortSearchDialog({ open, onClose }) {
    const [age, setAge] = React.useState();

    const handleSetAge = (event) => {
        setAge(event.target.age);
    };

    const top100Films = [{ title: "aaa" }, { title: "bbb" }, { title: "ccc" }, { title: "ddd" }];

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                open={open}
            // onClose={handleClose}
            >
                <Stack m={2} spacing={3} >
                    <Autocomplete
                        multiple
                        id="tags-filled"
                        options={top100Films.map((option) => option.title)}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                placeholder="תכונות"
                            />
                        )}
                    />
                </Stack>
                <Stack justifyContent="space-between" alignItems="center" align="center" >
                    {/* <Stack>
                        <Grid item xs={12} sm={2}>
                            <FormControl>
                                <RadioGroup
                                    required
                                    defaultValue="female"
                                    name="sex"
                                    value={"#"}
                                    onChange={"#"}
                                    sx={{ my: 1 }}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="נקבה" />
                                    <FormControlLabel value="male" control={<Radio />} label="זכר" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Stack> */}
                    <Stack>
                        <Typography>גיל</Typography>
                        <Stack item direction="row" >
                            <Grid >
                                <Typography>מ -</Typography>
                                <TextField />
                            </Grid>
                            <Grid item>
                                <Typography>עד -</Typography>
                                <TextField />
                            </Grid>
                        </Stack>
                    </Stack>
                </Stack>
            </Dialog>
        </React.Fragment>
    )
}
