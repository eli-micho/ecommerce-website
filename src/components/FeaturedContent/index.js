import React from 'react';
import ProductCard from './../../components/ProductCard/';
import './styles.scss';

import plantsObj from './../../helpers/plantsObj';

const FeaturedContent = () => {
    return (
        <section className="featured-content">
            <div className="popular-products">
                <span className="section-title">
                    <h1>Popular</h1>
                </span>

                <ul>
                    <li><ProductCard plantInfo={plantsObj[0]}/></li>
                    <li><ProductCard plantInfo={plantsObj[1]}/></li>
                    <li><ProductCard plantInfo={plantsObj[2]}/></li>
                    <li><ProductCard plantInfo={plantsObj[3]}/></li>
                </ul>
            </div>
        </section>
    );
};

export default FeaturedContent;
