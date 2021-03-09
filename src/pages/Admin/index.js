import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import './styles.scss';

import Modal from './../../components/Modal'
import Button from './../../components/Form/FormButton';
import FormInput from './../../components/Form/FormInput';
import FormSelect from './../../components/Form/FormSelect';

import CKEditor from 'ckeditor4-react';

const mapState = ({ productsData }) => ({
    products: productsData.products
})

const Admin = props => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [productCategory, setProductCategory] = useState('mens');
    const [productDesc, setProductDesc] = useState('')
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0)
    const [productThumbnail, setProductThumbnail] = useState('');

    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );
    }, []);

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal, 
        toggleModal
    }

    const resetForm = () => {
        setHideModal(true);
        setProductCategory('mens');
        setProductName('');
        setProductThumbnail('');
        setProductPrice(0);
        setProductDesc('');
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            addProductStart({
                productCategory,
                productName,
                productPrice,
                productThumbnail,
                productDesc
            })
        );
        resetForm();
    };

    /* const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        );
    };

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore
    }; */

    return (
        <div className="admin">
            <div className="callToActions">
                <ul>
                    <li>
                        <Button onClick={() => toggleModal()}>
                            Add New Product
                        </Button>
                    </li>
                </ul>
            </div>

            <Modal {...configModal} >
                <div className="addNewProductForm">
                    <form onSubmit={handleSubmit}>
                        <h2>
                            Add New Product
                        </h2>

                        <FormInput
                            label="Name"
                            type="text"
                            value={productName}
                            handleChange={e => setProductName(e.target.value)}
                        />

                        <FormInput
                            label="Main image URL"
                            type="url"
                            value={productThumbnail}
                            handleChange={e => setProductThumbnail(e.target.value)}
                        />

                        <FormInput
                            label="Price"
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={productPrice}
                            handleChange={e => setProductPrice(e.target.value)}
                        />

                        <CKEditor
                            onChange={e => setProductDesc(e.editor.getData())}
                            type="text"
                            value={productDesc}
                        />

                        <br />

                        <Button type="submit">
                            Add product
                        </Button>


                    </form>
                </div>
            </Modal>
            
            <div className="manageProducts">
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>
                                <h1>
                                    Manage Products
                                </h1>
                            </th>
                        </tr>

                        <tr>
                            <td>
                                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                                            const { 
                                                productName,
                                                productThumbnail,
                                                productPrice,
                                                documentID
                                            } = product;

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <img className="thumb" src={productThumbnail}/>
                                                    </td>
                                                    <td>
                                                        {productName}
                                                    </td>
                                                    <td>
                                                        ${productPrice}
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>

                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>        

        </div>
    );
}

export default Admin;