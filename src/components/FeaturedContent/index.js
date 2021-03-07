import React from 'react';
import ProductCard from './../../components/ProductCard/';
import './styles.scss';

const FeaturedContent = () => {
    return (
        <section className="featured-content">
            <div className="popular-products">
                <span className="section-title">
                    <h1>Popular</h1>
                </span>

                <ul>
                    <li><ProductCard /></li>
                </ul>
            </div>
        </section>
    );
};

export default FeaturedContent;
