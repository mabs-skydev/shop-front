import React from 'react';

const CartItem = ({item, incrementItem, decrementItem}) => {
    return (<React.Fragment>
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src="/img/download.svg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.details.substring(0, 20) + '...'}</p>
                    <inupt type="number" className="form-group mr-3">{item.count}</inupt>
                    <button className="btn btn-success mr-2" onClick={() => {incrementItem(item._id)}}> + </button>
                    <button className="btn btn-danger"  onClick={() => {decrementItem(item._id)}}> - </button>
                </div>
            </div>
        </div>
    </React.Fragment>);
}
 
export default CartItem;