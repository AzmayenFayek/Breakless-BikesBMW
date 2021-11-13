import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import "./AddBikes.css";


const AddBikes = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch(`https://shielded-brook-47380.herokuapp.com/addBikes`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return (
        <>
            <Navbar></Navbar>
            <div>
                <h2 className="mt-5 hero__caption text-center">Please Insert Bikes</h2>
                <div className="login-box w-25 m-auto mt-5 mb-5 ">
                    <div className="event-box border border d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("model")}
                                    placeholder="model"
                                    className="p-2 mt-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 mt-2"
                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    className="p-2 mt-2 w-100"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 mt-2"
                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    className="p-2 mt-2 w-100"
                                />
                                <input
                                    {...register("price", { required: true })}
                                    placeholder="price"
                                    type="number"
                                    className="p-2 mt-2"
                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    className="p-2 mt-2 w-100"
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" value="Add Events" className="p-3 mt-2 mb-2 w-100 btn-one" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddBikes;