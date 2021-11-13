import React, { useEffect, useState } from 'react';
import Explore from '../Explore';

const Explores = () => {
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
            products.map(product => <Explore
            key={product.id}
            product={product}
            ></Explore>)
        }
         </div>
       
    </div>
    );
};

export default Explores;