import React from 'react';
import Banner from '../../Bannner/Banner';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        </div>
    );
};

export default Home;