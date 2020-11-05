import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import categoryActionCreators from './actions';

class ProductEditor extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    category: '',
  };

  onAddNewProductClick = () => {
    const { addNew } = this.props,
      { name, description, price, category } = this.state;
    addNew(name, description, price, category);
  };
  render() {
    const { categories } = this.props;
    let option = categories.map(cat => (
      <option key={cat.id} value={cat.name}>{cat.name}</option>
    ));
    return (
      <section className="edit">
        <div className="field">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            onChange={evt => this.setState({ name: evt.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="">Description :</label>
          <input
            type="text"
            onChange={evt =>
              this.setState({ description: evt.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="">Price :</label>
          <input
            type="number"
            onChange={evt =>
              this.setState({ price: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="">Category</label>
          <select value={categories.name} onChange={evt => this.setState({ category: evt.target.value })}>
            {option}
          </select>
        </div>
        <div className="field">
          <input
            type="button"
            value="Add Product"
            onClick={this.onAddNewProductClick}
          />
        </div>
      </section>
    );
  }
}

// export default ProductEditor;
function mapStateToProps(storeState){
  const categories = storeState.categories;
  return {
    categories : categories,
  };
}
export default connect(mapStateToProps)(ProductEditor);
