import React from 'react';
import Banner from '../../Bannner/Banner';
import ContactUs from '../../ContactUs/ContactUs';
import Review from '../../Dashboard/Review/Review';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
       
        <Banner></Banner>
        <Products></Products>
        <ContactUs></ContactUs>
        </div>
    );
};

export default Home;