import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RelativeLayer from './relativeLayer';

export default function FamilyInfo() {
  const [familyData, setFamilyData] = React.useState({
    firstName: '',
    lastName: ''
  });

  const handleFamilyDataChange = (event) => {
    const { name, value } = event.target;
    setPersonData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleNextButton() {
    if (true) {
      // navigate('/moreInfo');
      return;
    }
  }

  return (
    <React.Fragment>
      <Grid container mt={10} justifyContent="center" alignItems="center">
        <Typography variant="h4" gutterBottom>
          פרטי המשפחה
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
            <RelativeLayer relative='אבא' />
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <RelativeLayer relative='אמא' />
          </Grid>
          <Grid>
              <Grid>
                <button onClick={handleNextButton}>הבא</button>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
