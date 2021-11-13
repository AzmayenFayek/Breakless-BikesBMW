import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div>
            <div className="single-slider padding-bottom mb-45">
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
            <div className="support-company-area bottom-padding mt-5">
                <div className="container ">
                    <div className="row align-items-center justify-content-between ">
                        <div className="col-xl-6 col-lg-6 col-md-10 mt-5">
                            <div className="support-location-img">
                                <img src="https://www.pngall.com/wp-content/uploads/2/Sports-Bike-PNG-Picture.png" alt=' ' />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10 mt-5">
                            <div className="right-caption">

                                <div className="section-tittle">
                                    <h2>Get ready for real time adventure</h2>
                                </div>
                                <div className="support-caption">
                                    <p className="mb-50">Let’s start your journey with us, your dream will come true.</p>
                                    <p className="mb-50">Get the latest bikes arround the word</p>
                                    <p className="mb-50">We provide 2 years Guaranttee</p>

                                    <a href="about.html" className="btn about-btn">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div >
            </div>

        </div>
    );
};

export default About;