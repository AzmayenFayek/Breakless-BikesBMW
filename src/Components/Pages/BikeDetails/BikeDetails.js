import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import './BikeDetails.css'

const BikeDetails = () => {
    const handleBuynow = (id) => {
        console.log(id);
    };

    const { id } = useParams();
    const [bike, setBike] = useState({})
    useEffect(() => {

        fetch(`http://localhost:5000/allBikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])


    return (
        <>
            <Navbar></Navbar>
            <div className="support-company-area bottom-padding mt-5 mb-45">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="support-location-img ">
                                <img style={{ "width": "60%" }} src={bike.image} alt=' ' />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="right-caption">

                                <div className="section-tittle">
                                    <h2>Details About {bike.model} </h2>
                                </div>
                                <div className="support-caption">
                                    <p className="mb-50">{bike.description}</p>




                                    <div className="d-flex justify-content-between mb-50" ><span className="price">${bike.price}</span>
                                        <Link to="/buynow">
                                            <button onClick={() => handleBuynow(bike._id)} className="fas fa-shopping-cart">Buy Now</button>
                                        </Link></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <Footer></Footer>
        </>

    );
};

export default BikeDetails;