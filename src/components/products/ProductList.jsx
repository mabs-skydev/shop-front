import React, { useEffect } from 'react';
import SingleProduct from './SingleProduct';

const ProductList = ({products, addToCart, cart}) => {

    const existInCart = id => cart.findIndex(item => item._id === id)

    return ( 
        <React.Fragment>
            {products.map(product => <SingleProduct
                                        product={product}
                                        key={product._id}
                                        addToCart={addToCart}
                                        inCart={existInCart(product._id)}
                                        />)}
        </React.Fragment>
    );
}
 
export default ProductList;