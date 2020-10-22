import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemCountDecremented, itemCountIncremented } from '../store/reducers/cartReducer';
import CartItemsList from './cart/CartItemsList';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const incrementItem = id => dispatch(itemCountIncremented(id))
    const decrementItem = id => dispatch(itemCountDecremented(id))

    return ( <React.Fragment>
        <div className="row">
            <div className="col-md-12">
            <h2>Cart</h2>
            <CartItemsList
                items={cart}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
            />
            </div>
        </div>
    </React.Fragment> );
}
 
export default Cart;