import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './index.css';
import productActionCreators from './actions';

class Products extends Component {
    render() {
        const { data, categories, toggleOutOfStock, remove, removeOutOfStock, addNew, load } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <input type="button" value="LOAD PRODUCTS" onClick={load}/>
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} categories={categories} />
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products,
        categories = storeState.categories.categoryList,
        selectedCatgory = storeState.categories.selectedCategory;
    if (selectedCatgory !== '')
        return { data : products.filter(p => p.category === selectedCatgory), categories };
    return { data : products, categories};
}

function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);