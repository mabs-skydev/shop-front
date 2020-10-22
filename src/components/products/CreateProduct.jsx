import React, { Component } from 'react';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import { connect } from 'react-redux';
import {loadMarques} from '../../store/entities/marques'
import {loadCategories} from '../../store/entities/categories'
import Select from '../common/Select';
import { addProduct } from '../../store/entities/products';

class CreateProduct extends Component {
    state = { 
        name: '',
        quantity: 0,
        price: 0,
        category: '',
        details: '',
        marque: '',
        marques: [],
        categories: [],
        errors: {}
    }

    componentDidMount() {
        this.props.loadMarques();
        this.props.loadCategories();
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.marques !== prevState.marques){
          return {marques: nextProps.marques}
       }
       
       if(nextProps.categories !== prevState.categories){
            return {categories: nextProps.categories}
        }

        return null;
     }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.marques!==this.props.marques){
          this.setState({marques: this.props.marques});
        }

        if(prevProps.categories!==this.props.categories){
            this.setState({categories: this.props.categories});
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()

        const {name, quantity, price, details, marque, category} = this.state

        this.props.addProduct({name, quantity, price, details, marque, category});
    }

    render() { 
        const {name, details, quantity, price, category, marque, marques, categories, errors} = this.state
        return ( <React.Fragment>
            <div className="col-md-8">
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="name"
                        label="Product name"
                        placeholder="Enter product name..."
                        value={name}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="quantity"
                        label="Quantity"
                        placeholder="Enter quantity..."
                        value={quantity}
                        type="number"
                        options={{min:0}}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="price"
                        label="Price"
                        placeholder="Enter the price..."
                        value={price}
                        type="number"
                        options={{min:0, step: 0.01}}
                        onChange={this.handleChange}
                    />
                    <Select 
                        name="marque"
                        label="Marque"
                        value={marque}
                        options={marques}
                        onChange={this.handleChange}
                    />
                    <Select 
                        name="category"
                        label="Category"
                        value={category}
                        options={categories}
                        onChange={this.handleChange}
                    />
                    <TextArea
                        name="details"
                        label="Product details"
                        placeholder="Enter Details (optional)..."
                        value={details}
                        onChange={this.handleChange}
                    />
                    <div className="col text-center">
                        <button type="submit" className="btn btn-primary mb-3">Add product</button>
                    </div>
                </form>
            </div>
        </React.Fragment> );
    }
}

const mapStateToProps = state => ({
    marques: state.entities.marques.list,
    categories: state.entities.categories.list,
    products: state.entities.products.list,
});

const mapDispatchToProps = dispatch => ({
    loadMarques: () => {dispatch(loadMarques())},
    loadCategories: () => {dispatch(loadCategories())},
    addProduct: (product) => {dispatch(addProduct(product))}
});
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);