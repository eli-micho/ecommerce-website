import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';

import ProductCard from './../../components/ProductCard/';
import './styles.scss';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const FeaturedContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { products } = useSelector(mapState);

    const { data } = products;

    if(!Array.isArray(data)) return null;

    if(data.length < 1) {
        return (
            <div className="product-catalog">
                <p>No products found.</p>
            </div>
        )
    }
    return (
        <section className="featured-content">
            <div className="products">
                <span className="section-title">
                    <h1>Featured Products</h1>
                </span>

                <div className="productCatalog">
                    {data.map((product, pos) => {
                        const { productThumbnail, productName, productPrice, productDesc } = product;
                        if(!productThumbnail|| !productName || typeof productPrice === "undefined") return null;
                        const configProduct = { ...product }
                        return (
                            <ProductCard {...configProduct}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedContent;
