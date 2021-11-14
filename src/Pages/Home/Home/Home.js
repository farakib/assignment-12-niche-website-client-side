import React from 'react';
import Banner from '../../Bannner/Banner';
import Review from '../../Dashboard/Review/Review';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        <Review></Review>
        </div>
    );
};

export default Home;