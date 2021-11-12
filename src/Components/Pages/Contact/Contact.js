import React from 'react';
import "./Contact.css"
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="header-contact padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero__caption hero__caption2 text-center">
                                <h2 className="text-style" >About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="support-company-area bottom-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="support-location-img">
                                <img src="https://image.freepik.com/free-vector/customer-support-illustration_23-2148891227.jpg" alt=' ' />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="right-caption">

                                <div className="section-tittle">
                                    <h2>We care you for 24/7 adventure</h2>
                                </div>
                                <div className="support-caption">
                                    <p className="mb-50">Let’s start your journey with us, your dream will come true.</p>
                                    <p className="mb-50">We have trained travelers guide</p>
                                    <p className="mb-50">Have a nice journey</p>

                                    <a href="about.html" className="btn about-btn">Call Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

            <div >
            </div>

        </div>
    );
};


export default Contact;
