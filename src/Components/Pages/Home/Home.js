import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Header from './../Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import HomePageBikes from '../HomePageBikes/HomePageBikes';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HomePageBikes />
            <Footer />

        </div>
    );
};

export default Home;