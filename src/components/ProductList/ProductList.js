import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends React.Component {
  state = {
    products: [
      { name: "React.js", price: "99 $", id: 1, quantity: 1 },
      { name: "Node.js", price: "69 $", id: 2, quantity: 2 },
      { name: "Veu.js", price: "59 $", id: 3, quantity: 3 },
    ],
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };
  incrementHandler = (id) => {
    console.log("clicked", id);
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products });
  };
  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);

    if (selectedItem.quantity === 1) {
      const filteredItem = products.filter((p) => p.id !== id);
      this.setState({ products: filteredItem });
    } else {
      selectedItem.quantity--;
      this.setState({ products });
    }
  };

  changeHandler = (e, id) => {
    /* console.log(e.target.value, id); */
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.name = e.target.value;
    this.setState({ products });
  };
  render() {
    if (this.state.products.length === 0) {
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
        {this.state.products.map((product) => {
          return (
            <Product
              product={product}
              click={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              onDecrement={() => this.decrementHandler(product.id)}
              change={(e) => this.changeHandler(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
