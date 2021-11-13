import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="container-fluid banner">
                <div class="auto-container slide align-items-center">
                    <div class=" col-lg-6 col-md-6">
                        <div class="slider-content ">
                            <h1>Best Deal</h1>
                            <h2>15% - 20% Off</h2>
                            <p>Find the new bike for your need, filter by budget, price, and features.</p>
                            <div class="btn-box"><p class="btn-one">Explore</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-6 col-md-6">
                        <div class="slider-content">
                            <img style={{ "width": "100%" }} src="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/slide/layer_img_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;