import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const MyOrder = () => {

    const email = sessionStorage.getItem("email");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://shielded-brook-47380.herokuapp.com/myOrder/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleCancelOrder = (id) => {
        fetch(`https://shielded-brook-47380.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        console.log(id);

    };


    return (
        <>
            <div className="container">
                <div className="container heading-title mb-45">
                    <h2 className="heading">Your Orders</h2>
                </div>
                <div className="content-event">
                    {orders?.map((pd, index) => (

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
                                    <div className="d-flex justify-center">


                                        <Link to={`/buyNow/${pd._id}`}>
                                            <button onClick={() => handleCancelOrder(pd._id)} className="fas fa-shopping-cart">Delete</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    ))}
                </div>
            </div>
        </>
    );
};

export default MyOrder;