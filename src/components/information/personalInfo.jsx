import * as React from 'react';
// import { navigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { redirect } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

export default function PersonalInfo() {
  const [personData, setPersonData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    address: '',
    dayOfBirth: {

    },
    sex: 'female'
  });

  const handlePersonDataChange = (event) => {
    const { name, value } = event.target;
    setPersonData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleNextButton() {
    if (true) {
      // navigate('/familyInfo');
      // const history = useHistory();
      return;
    }
  }

  return (
    <React.Fragment>
      <Grid container mt={10} justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h4">
              פרטים אישיים
            </Typography>
          </Grid>
          <Grid item container mt={6} spacing={3} xs={6}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="שם פרטי"
                fullWidth
                autoComplete="given-name"
                variant="filled"
                value={personData.firstName}
                onChange={handlePersonDataChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="שם משפחה"
                fullWidth
                autoComplete="family-name"
                variant="filled"
                value={personData.lastName}
                onChange={handlePersonDataChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phoneNum"
                name="phoneNum"
                label="טלפון"
                fullWidth
                autoComplete="phone-num"
                variant="filled"
                value={personData.phoneNum}
                onChange={handlePersonDataChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="אימייל"
                fullWidth
                variant="filled"
                value={personData.email}
                onChange={handlePersonDataChange}
              />
            </Grid>
            <Grid container mt={6} spacing={5}>
              <Grid item xs={12} sm={5}>
                <TextField
                  id="address"
                  name="address"
                  label="כתובת"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  value={personData.address}
                  onChange={handlePersonDataChange}
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {/* <DemoContainer components={['DatePicker']}> */}
                  <DatePicker
                    required
                    name="dayOfBirth"
                    label="תאריך לידה"
                    value={personData.dayOfBirth}
                    onChange={handlePersonDataChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* </DemoContainer> */}
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl>
                  <RadioGroup
                    required
                    defaultValue="female"
                    name="sex"
                    value={personData.sex}
                    onChange={handlePersonDataChange}
                    sx={{ my: 1 }}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="נקבה" />
                    <FormControlLabel value="male" control={<Radio />} label="זכר" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <button onClick={handleNextButton}>הבא</button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </React.Fragment >
  );
}
