import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import FormButton from './../Form/FormButton';
import './styles.scss';

const mapState = state => ({
    product: state.productsData.product
});

const ProductCard = (product) => {
    const dispatch = useDispatch();
    const history = useHistory();


    const {
        documentID,
        productThumbnail,
        productName,
        productPrice,
        productDesc
    } = product;

    
    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
    }

    const configAddToCartBtn = {
        type: 'button'
    };

    return (
        <div className="productCard">
            <img src={productThumbnail} alt={[productName]}/>
            <div className="container">
                <h4>{productName}</h4> 
                <p>${productPrice}</p>
                <div className="addToCart">
                    <FormButton {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </FormButton>
                </div>
                <span className="desc" dangerouslySetInnerHTML={{__html: productDesc}}
                /> 
            </div>
        </div>
      
    );
};

export default ProductCard;