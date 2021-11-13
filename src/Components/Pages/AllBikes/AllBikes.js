import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllBikes.css";

const AllBikes = () => {

    const handleBuynow = (id) => {
        console.log(id);
    };

    const [bike, setBike] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-brook-47380.herokuapp.com/allBikes`)
            .then((res) => res.json())
            .then((data) => setBike(data));
    }, []);

    console.log(bike);
    return (
        <>
            <section className="events-section container">

                <div className="container">
                    <div className="container heading-title mb-45">
                        <span >Check our latest Bikes here</span>
                        <h2 className="heading">All Bikes </h2>
                    </div>
                    <div className="content-event">
                        {bike?.map((pd, index) => (

                            <div className="single-event" key={pd._id}>
                                <div className="single-cat mb-30 ">
                                    <div className="cat-img">
                                        <img src={pd.image} alt="" />
                                    </div>
                                    <div className="cat-cap">
                                        <div className="pricing d-flex justify-content-between">
                                            <h3> {pd.model}</h3>
                                            <span className="price">${pd.price}</span>
                                        </div>
                                        <p className="main-hero-para mt-3"> {pd.description}</p>

                                        <div className="d-flex justify-center">
                                            <Link to={`/bikes/${pd._id}`}>
                                                <span className="fas fa-arrow-right"></span>
                                            </Link>

                                            <Link to={`/buyNow/${pd._id}`}>
                                                <button onClick={() => handleBuynow(pd._id)} className="fas fa-shopping-cart">Buy Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllBikes;