import { React, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchProducts,
} from '../store/actions/productList';

function Products(props) {
  // useEffect as componentDidMount, only at load time.
  useEffect(function (){
    // fetchProducts - Will call action method which will do a async call and fetch us product list for the first time.
    props.fetchProducts();
  }, []);
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {props.productList.products.map(product => (
          <li key={product.productId}>
            <div>
              <p>
                Name: {product.productName}
              </p>
            </div>
            <div>
              Price: {product.productPrice}
            </div>
            <button>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  productList: state.productList
})
const mapActionsToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch)

export default connect(mapStateToProps, mapActionsToProps)(Products);
