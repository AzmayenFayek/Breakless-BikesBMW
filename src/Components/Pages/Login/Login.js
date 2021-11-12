import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography
                        sx={{ width: '75%', m: 1, textAlign: 'center' }}

                        variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            id="standard-basic"
                            label="Password"

                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1 }}

                            id="standard-basic"
                            label="Submit"
                            type="submit"
                            variant="contained" >Login</Button>
                        <NavLink to="/register">
                            <Button variant="text"
                                sx={{ width: '75%', textAlign: 'center' }}>
                                New User? Please Register.</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {
                            user?.email &&
                            <Alert severity="success" > Your account is succesfully created ! </Alert>

                        }
                        {
                            authError &&
                            <Alert severity="error" > {authError} </Alert>

                        }
                    </form>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    </Grid>

                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;