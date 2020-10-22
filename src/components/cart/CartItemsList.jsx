import React from 'react';
import CartItem from './CartItem';

const CartItemsList = ({items, incrementItem, decrementItem}) => {
    return ( <React.Fragment>
        <div className="row">
            {items.map(item => <CartItem item={item} incrementItem={incrementItem} decrementItem={decrementItem} key={item._id} />)}
        </div>
    </React.Fragment> );
}
 
export default CartItemsList;