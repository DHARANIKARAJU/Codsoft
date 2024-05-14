import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Here, you can add your logic for authentication without interacting with a database.
    // For demonstration, let's check if the username and password are "admin".
    if (name === 'admin' && password === 'admin') {
      navigate('/home'); // Navigate to home page on successful login
      setError(false);
    } else {
      setError(true); // Set error state to true if login fails
    }
  };

  return (
    <body className='page'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm" style={{ minHeight: '70vh' }} className="sign">
          <CssBaseline />
          <Box className="Style"
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              px: 8,
              py: 10,               
              color: '#fff',  
              marginTop: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" color="black" fontSize="30px">
              QUIZ MAKER APP
            </Typography>
            <Typography component="h1" variant="h5" color="black">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e) => setName(e.target.value)}
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary" 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                color="secondary" 
              />
              {error && <Typography variant="body2" color="error">Invalid username or password.</Typography>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#2196F3' }} 
              >
                Sign In
              </Button>
              <Grid container>
                
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </body>
  );
}
