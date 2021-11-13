import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';


const BuyNow = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { id } = useParams();
    const [bike, setBike] = useState({})

    useEffect(() => {

        fetch(`http://localhost:5000/allBikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])
    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <>
            <Navbar></Navbar>
            <div className="support-company-area bottom-padding mt-5 mb-45">
                <div className="container">
                    <div className="row container align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="support-location-img ">
                                <img style={{ "width": "60%" }} src={bike.image} alt=' ' />
                            </div>
                            <div className="cat-cap mt-5" style={{ "width": "60%" }}>

                                <div className="pricing d-flex justify-content-between">
                                    <h3> {bike.model}</h3>
                                    <span className="price">${bike.price}</span>
                                </div>



                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="login-box w-75 m-auto mt-5 mb-5 ">
                                <div className="event-box border border d-flex justify-content-center align-items-center">
                                    <div className="login-form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                {...register("model", { required: true })}
                                                defaultValue={bike.model}
                                                placeholder="model"
                                                className="p-2 mt-2 w-100"
                                            />
                                            <br />

                                            <input
                                                {...register("Comment", { required: true })}
                                                placeholder="Comment"
                                                className="p-2 mt-2"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="p-2 mt-2 w-100"
                                            />

                                            <input
                                                {...register("image", { required: true })}
                                                defaultValue={bike.image}

                                                placeholder="Image Link"
                                                className="p-2 mt-2"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="p-2 mt-2 w-100"
                                            />
                                            <input
                                                {...register("price", { required: true })}
                                                defaultValue={bike.price}

                                                placeholder="price"
                                                type="number"
                                                className="p-2 mt-2"
                                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                                className="p-2 mt-2 w-100"
                                            />
                                            <br />

                                            {errors.exampleRequired && <span>This field is required</span>}

                                            <input type="submit" value="Order Now" className="p-3 mt-2 mb-2 w-100 btn-one" />
                                        </form>
                                    </div>
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

export default BuyNow;