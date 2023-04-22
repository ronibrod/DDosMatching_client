import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import SignInSide from '../signIn/signIn';
import {signUpApi} from '../../apis/user'

const theme = createTheme();

export default function SignUp() {
  const [data, setData] = React.useState({ firstName: '', lastName: '', email: '', password: '' });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const navigate = useNavigate();

    try {
      console.log(data);
      // await signUpApi(data);
      navigate('/signIn');
    } catch (error) {
      console.log(error);
    }
  };
  const [navigation, setNavigation] = React.useState(false)
  const handleSignUp = async () => {
    try {
      console.log(data);
      signUpApi(data).then((err,res) => {
        console.log(err);
        if(!err){
          setNavigation(true)
        }
      })
      // navigate('/signIn');
      // history.push('/signIn');
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={data.firstName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Link
              onClick={handleSignUp}
              to={navigation && '/signIn'}
            >
              Sign Up here
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}