import React from 'react';
import './Product.css';
const Product = ({product}) => {
    const {name, description, price, img} = product;
    return (
        <div>
     <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <h6>price: {price}</h6>
      </div>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        </div>
    );
};

export default Product;