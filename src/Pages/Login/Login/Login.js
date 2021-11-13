import { Button, Container, Grid, TextField, Typography,CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading,authError}= useAuth();

    const location  = useLocation();
    const history = useHistory();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit  = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={12} md={6}>
                <Typography variant="body2" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField
                 sx={{width: '75%', m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onBlur={handleOnChange}
                  variant="standard" />
                <TextField
                 sx={{width: '75%', m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnChange}
                  variant="standard" />
                  
                  <Button sx={{width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                  <NavLink style={{textDecoration: 'none'}} to="/register">
                      <Button variant="text">New User? Please Register</Button>
                  </NavLink>
                  {
                    isLoading && <CircularProgress/>
                }
                {
                    user?.email && <Alert severity="success">Login Successfully</Alert>
                }
                {authError && <Alert severity="error">{authError}</Alert>}
                </form> 
                <p>--------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Sign In With Google</Button>
                </Grid>
                <Grid item sx={12} md={6}>
                    <img style={{width: '100%'}} src="https://i.ibb.co/RBCL2BS/login-1.jpg"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;