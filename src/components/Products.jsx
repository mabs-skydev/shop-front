import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './products/categoriesList';
import { loadProducts } from '../store/entities/products';
import { connect } from 'react-redux';
import { loadCategories } from '../store/entities/categories';
import ProductList from './products/ProductList';
import {addToCart} from "../store/reducers/cartReducer"
import { categoryChanged } from '../store/reducers/filtersReducer';

class Products extends Component {
    componentDidMount() {
        this.props.loadProducts();
        this.props.loadCategories();
    }

    handleChangeCategory = id => this.props.categoryChanged(id)

    handleAddToCart = id => this.props.addToCart(id)

    render() { 
        const all = {_id: 1, name: "All Categories"}
        const categories = [all, ...this.props.categories]

        const {selectedCategory } = this.props;

        const allProducts = this.props.products
        const products = (selectedCategory === 1)? allProducts : allProducts.filter(product => product.category === selectedCategory)

        return ( <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-9">
                    <Link className="btn btn-sm btn-primary float-right" to="/products/new">Add New Product</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <CategoriesList 
                        categories={categories}
                        selectedCategory={this.props.selectedCategory}
                        onClick={this.handleChangeCategory}
                    />
                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="row">
                        <ProductList products={products} addToCart={this.handleAddToCart} cart={this.props.cart} />
                    </div>
                </div>

            </div>
        </React.Fragment> );
    }
}

const mapStateToProps = state => ({
    products: state.entities.products.list,
    categories: state.entities.categories.list,
    cart: state.cart,
    selectedCategory: state.filters.category,
});

const mapDispatchToProps= dispatch => ({
    loadProducts: () => {dispatch(loadProducts())},
    loadCategories: () => {dispatch(loadCategories())},
    addToCart: id => {dispatch(addToCart(id))},
    categoryChanged : id => {dispatch(categoryChanged(id))}
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Products);