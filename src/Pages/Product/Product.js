import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BuyingModal from '../BuyingModal/BuyingModal';
import './Product.css';


const Product = ({product}) => {
    const {name, description, price, img} = product;
    const [openBuying, setBuyingOpen] = React.useState(false);
    const handleBuyingOpen = () => setBuyingOpen(true);
    const handleBuyingClose = () => setBuyingOpen(false);
    return (
      <>
      <div>
     <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <h6>price: {price}</h6>
      </div>
        <button onClick={handleBuyingOpen} class="btn btn-primary">Buy Now</button>

    </div>
  </div>
      
        </div>
        <BuyingModal
        product={product}
        openBuying={openBuying}
        handleBuyingClose={handleBuyingClose}
        ></BuyingModal>
        </>
    );
};

export default Product;