import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12">
                        <div className="hero__caption text-center">
                            <h1 data-animation="fadeInUp" data-delay="0.1s" className="">Lifelong memories just a <dd>few seconds away</dd></h1>
                            <p data-animation="fadeInUp" data-delay="0.6s" className="" >Let’s start your journey with us, your dream will come true</p>
                            <button className="btn-one" data-animation="bounceIn" data-delay="1s" tabindex="0">Explore Destinations</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  slider-bg1 slider-height d-flex justify-content-center align-items-end">
                <div className="slide">
                    <div className="auto-container car-img">
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8">
                                    <div className="car running">
                                        <img src="https://preview.colorlib.com/theme/tralive/assets/img/hero/xcar.png.pagespeed.ic.RMwqCTktUn.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="content ">
                            <h2 className="title">Modern dentistry
                                <br /> in a calm &amp;
                                <br /> relaxed feeling.
                            </h2>
                            <div class="text">Maintains a highly trained, qualified and experienced Dentists.</div>
                            <div class="btn-box"><p class="btn-one">Our Specialities</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;