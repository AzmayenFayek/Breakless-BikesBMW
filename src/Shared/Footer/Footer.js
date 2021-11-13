import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-area footer-padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-30">


                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="footer-pera">Life is a race. The more we fit for it the more we can enjoy it.Happy Race!!!</p>
                                    </div>

                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-square"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div >
                                <h4 className="footer-tittle">Navigation</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-8 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">Mountain Bike</a></li>
                                    <li><a href="#">Racing Bike</a></li>
                                    <li><a href="#">Road Bike</a></li>
                                    <li><a href="#">Stunt Bike</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle mb-20">
                                <h4>Contact Us</h4>
                                <p>76/A, Green Lane, Dhanmondi, NYC</p>
                                <p>Breakless@gmail.com</p>
                            </div>
                            <ul className="mb-20">
                                <li className="number">0188888888</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;