import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends React.Component {
  render() {
    const { products, onRemove, onIncrement, onDecrement, onChange } =
      this.props;
    if (products.length === 0) {
      return <div>There is no product in cart</div>;
    }
    /* {
      console.log(this.state.products.length);
      !this.state.products.length ? (
        <div>go to shopping</div>
      ) : (
        <div>wellcome back!</div>
      );
    } */
    return (
      <div>
        {products.map((product) => {
          return (
            <Product
              product={product}
              click={() => onRemove(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
              change={(e) => onChange(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
