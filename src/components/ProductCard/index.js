import React from 'react';
import './styles.scss';

const ProductCard = (props) => {
    return (
        <div class="product-card">
        <img alt="Avatar"/>
            <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
            </div>
        </div>
      
    );
};

export default ProductCard;