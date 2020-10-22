import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product, addToCart, inCart}) => {
    return (
    <React.Fragment>
        <div className="col-md-4 mb-3">
            <div className="card card-fit">
                <img className="card-img-top" src="/img/download.svg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fixed-height">{(product.details) ? product.details.substring(0, 20) + '...' : ''}</p>
                    <button className={`btn btn-${(inCart >-1)? 'danger' : 'primary'}`} onClick={() => addToCart(product._id)}>
                        {(inCart >-1)? 'Remove From Cart' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment> );
}
 
export default SingleProduct;