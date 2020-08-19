import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
  '1': {id: 1, category: 'Cassava', price: '$45', stocked: true, name: 'Garri'},
  '2': {id: 2, category: 'Grain', price: '$5', stocked: true, name: 'Rice'},
  '3': {id: 3, category: 'Grain', price: '$11', stocked: false, name: 'Beans'},
  '4': {id: 4, category: 'Cassava', price: '$9', stocked: true, name: 'Bread'},
  '5': {id: 5, category: 'Grain', price: '$100', stocked: false, name: 'Semo'},
  '6': {id: 6, category: 'Grain', price: '$10', stocked: true, name: 'Wheat'}
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
  }
  saveProduct(product) {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return { products };
    });
  }
  handleDestroy(productId) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
  }
  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        ></Filters>
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDestroy={this.handleDestroy}
        ></ProductTable>
        <ProductForm onSave={this.saveProduct} ></ProductForm>
      </div>
    );
  }
}

export default Products;