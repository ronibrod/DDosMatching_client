import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import SearchAppBar from './search'
import OnePersonDialog from './onePersonDialog'
import Axios from 'axios';
import getAllPeople from '../../apis/people';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [cards, setCards] = React.useState(null);

// const handleCards = () => {

// }

const theme = createTheme();

export default function Album() {
  const [isOnePersonOpen, setIsOnePersonOpen] = React.useState(false);

  const [people, setPeople] = React.useState([]) // inintial value no people!!

  const array = [
    {
      _id: 1,
      image: null,
      name: "דוד",
      age: 23,
      summary: "עייף אוהב לישון"
    },
    {
      _id: 2,
      image: null,
      name: "יערה",
      age: 24,
      summary: " לומדת תואר שני במדמח באוניברסיטת בן גוריון המבורגר זה החיים"
    },
    {
      _id: 3,
      image: null,
      name: "שלמה",
      age: 31,
      summary: "1.92 שחקן כדור סל"
    },
    {
      _id: 4,
      image: null,
      name: "מישל",
      age: 18,
      summary: "חיים פעם אחת"
    },
  ]

  React.useEffect(() => {
    setPeople(array)
    // getAllPeople()
    //   .then(data => setPeople(data))
    //   .catch(error => console.log(error))
  }, [])

  function handleUpdata(personId) {
    const personToUpdata = getPersonById(personId)
    console.log(personToUpdata)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Grid container mt={10} justifyContent="center" alignItems="center">
              <SearchAppBar />
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {people.map((person, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={person.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} >
                    <Stack direction="row" >
                      <Typography gutterBottom variant="h5" component="h2">
                        {person.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2" mx={2}>
                        {person.age}
                      </Typography>
                    </Stack>
                    <Typography>
                      {person.summary}
                    </Typography>

                  </CardContent>
                  <Stack direction="row" justifyContent='space-between' mb={2}>
                    <Grid item mx={3}>
                      <Button size="small" onClick={() => setIsOnePersonOpen(true)}>ראה עוד</Button>
                      <OnePersonDialog open={isOnePersonOpen} onClose={() => setIsOnePersonOpen(false)} />
                    </Grid>
                    <Grid item mx={3}>
                      <Button size="small" onClick={() => handleUpdata(person._id)}>הוסף</Button>
                    </Grid>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
