import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography
                        sx={{ width: '75%', m: 1, textAlign: 'center' }}

                        variant="body1" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            id="standard-basic"
                            label="Confirm Password"

                            name="password2"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1 }}

                            id="standard-basic"
                            label="Submit"
                            type="submit"
                            variant="contained" >Register</Button>
                        <NavLink to="/register">
                            <Button variant="text"
                                sx={{ width: '75%', textAlign: 'center' }}>
                                Already registered? Please login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {
                        user?.email &&
                        <Alert severity="success" > Your account is succesfully created ! </Alert>

                    }
                    {
                        authError &&
                        <Alert severity="error" > {authError} </Alert>

                    }
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    </Grid>

                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;