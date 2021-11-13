import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product';




const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]) 
    return (
        <div class="container">
           
        
            <div class="row row-cols-1 row-cols-md-3 g-3 mt-5 h-100">
            {
                products.slice(0,6).map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            }
             </div>
           
        </div>
    );
};

export default Products;