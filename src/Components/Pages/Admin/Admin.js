import React from 'react';
import './Admin.css';
import { useState } from 'react';
import Navbar from './../../../Shared/Navbar/Navbar';
import Footer from './../../../Shared/Footer/Footer';



const Admin = () => {

    const [control, setControl] = useState("addProducts");
    console.log(control);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-2 col-lg-2 col-md-12 bg-color">
                        <ul>
                            <li><a href="#">Dashboard</a></li>
                            <li onClick={() => setControl("addProducts")}
                                className="">AddBikes</li>
                            <li onClick={() => setControl("allOrders")} className="">Manage Orders</li>
                            <li onClick={() => setControl("allProducts")} className="">Manage Products</li>
                            <li onClick={() => setControl("manageOrders")} className="">Order Status</li>
                        </ul>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-12">

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Admin;