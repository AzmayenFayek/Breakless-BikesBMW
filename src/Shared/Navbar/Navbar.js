import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import useAuth from './../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
    const [show, setShow] = useState(false);


    const { user, logOut } = useAuth();
    return (
        <div>
            <section className="navbar-class">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link to="/home" className="navbar-brand"> Breakless.</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : "!show"}`} >
                            <div className="content-right" >
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/home" className="nav-link active" aria-current="page">Home</Link>                               </li>
                                    <li className="nav-item">
                                        <Link to="/allBikes" className="nav-link">Shops</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                    <Link to="/addEvents" className="nav-link">Add Events</Link>
                                </li> */}
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/myOrder" className="nav-link">My Order</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/addBikes" className="nav-link">Add Bikes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin" className="nav-link">Admin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">Contact</Link>
                                    </li>
                                    {/* <Link to="/login">
                                    <button className="btn btn-outline-none" id="btn-signIn" type="submit">Sign In</button>
                                </Link> */}
                                    {
                                        user?.email ?

                                            <Button onClick={logOut} color="secondary">Logout</Button>

                                            :
                                            <NavLink to="/login">
                                                <Button variant="outlined" color="secondary">Login</Button>
                                            </NavLink>
                                    }
                                    <li>
                                        <p className="ps-2 margin-user ">{user.email}</p>
                                    </li>

                                </ul>




                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Navbar;