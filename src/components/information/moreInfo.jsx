import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

import Slider from '@mui/joy/Slider';
import TextField from '@mui/material/TextField';

export default function PersonalInfo() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [moreData, setMoreData] = React.useState({
    height: '1.71',
    description: ''
  });

  const handleMoreDataChange = (event) => {
    const { name, value } = event.target;
    setPersonData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleFinishButton() {
    if (true) {
      // navigate('/familyInfo');
      return;
    }
  }

  const top100Films = [
  ];

  return (
    <React.Fragment>
      <Grid container mt={10} justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h4">
              פרטים נוספים
            </Typography>
          </Grid>

          <Grid item container mt={1} spacing={2} xs={4}>
            <Grid item container spacing={3} sx={{ height: 250 }}>

              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} mr={1} sm={2} sx={{ height: 180 }}>
                  <Typography gutterBottom>גובה</Typography>
                  <Slider
                    orientation="vertical"
                    valueLabelDisplay="auto"
                    variant="soft"
                    step={0.01}
                    max={2.10}
                    min={1.40}
                    name="height"
                    value={moreData.height}
                    onChange={handleMoreDataChange}
                  />
                </Grid>
                <Grid item container xs={12} sm={9}>
                  <Grid item container mt={8}>
                    <TextField
                      sx={{ width: 350 }}
                      id="filled-multiline-static"
                      label="תיאור כללי"
                      multiline
                      rows={6}
                      variant="filled"
                      name="description"
                      value={moreData.description}
                      onChange={handleMoreDataChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item mt={4} xs={12} sm={12}>
              <Grid container justifyContent="center" alignItems="center">
                
              </Grid>
              <Grid item xs={12} sm={6}>

              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <button onClick={handleFinishButton}>סיום</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment >
  );
}
