import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import "./NotFound.css"
import Navbar from '../../../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="no-page-found no-page-found__title"><span className="highlight-color">Oops!</span> There’s a problem with that page</h1>
            <p className="no-page-sub">404 Error: either the URL was mistyped, or curiously never even existed.</p>
            <img className="no-page-sub error-image" aria-hidden="true" src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/404-illustration.png" alt="">
            </img>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;