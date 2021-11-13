import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Header from './../Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import HomePageBikes from '../HomePageBikes/HomePageBikes';
import Review from './../Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HomePageBikes />
            <Review />
            <Footer />

        </div>
    );
};

export default Home;