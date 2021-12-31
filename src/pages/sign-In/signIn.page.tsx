import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {LOGIN_USER} from "../../graphql/User";
import {useMutation} from '@apollo/react-hooks';
import {useHistory } from "react-router-dom";
import { useApolloClient } from '@apollo/client';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [login] = useMutation(LOGIN_USER);
  const history = useHistory();
  function handleClick() {
    history.push("/offers");
    // setTimeout(() => {
    //   if (!isLogged) return
    //   history.push("/offers");
    // }, 1000);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    login({
      variables: {
        email: data.get('email'),
        password: data.get('password')
      }
    }).then((response: any) => {
      console.log('login user:', response);
      localStorage.setItem("accessToken", response.data.login.accessToken);
      localStorage.setItem("refreshToken", response.data.login.refreshToken);
      setMessage('Login Success');
      setSuccessful(true);
      // history.push("/offers");
      window.location.href ="/offers"
      // const client = useApolloClient();
      //
      // client.writeQuery({
      //   LOGIN_USER,
      //   data: ,
      // });
      // setTimeout(() => {
      //   console.log(
      //     'waite'
      //   )
      // }, 10000);
    }).catch((error: any) => {
      console.error('added user error:', error)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setMessage(resMessage);
      setSuccessful(false);
    })
  };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {message && (
          <div className="form-group">
            <div style={{color:"red" }} className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
