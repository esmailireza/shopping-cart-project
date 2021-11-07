import React, { Component, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import HookArray from "./components/HookArray";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ClassCounter2 from "./components/ClassCounter2";
import FunctionalCounter2 from "./components/FunctionalCounter2";
import ClassTimer from "./components/ClassTimer";
import FunctionalTimer from "./components/FunctionalTimer";
import Wrapper from "./components/hoc/Wrapper";
import ClickCounter from "./components/hocExample/ClickCounter";
import MoseOverCounter from "./components/hocExample/MoseOverCounter";
import UseRef from "./components/UseRef";
import CounterProvider, {
  CounterContext,
} from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/CounterOne";
class App extends Component {
  state = {
    products: [
      { name: "React.js", price: "99 $", id: 1, quantity: 1 },
      { name: "Node.js", price: "69 $", id: 2, quantity: 2 },
      { name: "Veu.js", price: "59 $", id: 3, quantity: 3 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };
  incrementHandler = (id) => {
    // 1- id==> ok
    // 2- index
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    // 3- clone the selected index and update the quantity
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };
  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };

    if (product.quantity === 1) {
      const filteredItem = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredItem });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (e, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    // 3- clone the selected index and update the value
    product.name = e.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    console.log("App");
    return (
      <>
        <CounterProvider>
          <p>welcome to context</p>
          <CounterOne />
        </CounterProvider>
        {/* <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHandler}
        />
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "hide" : "show"}
        </button>
        {this.state.isShow && <FunctionalTimer />}
        {<FunctionalCounter2 />}
        {<ClassCounter2 />}
        <ClickCounter name="reza" />
        <MoseOverCounter />
        <UseRef /> */}
      </>
    );
  }
}
/*
const App = () => {
  return (
    <div>
      { <HookCounter />}
      { <ClassCounter />}
      {<HookObject /> }
      <HookArray />
    </div>
  );
  /* const [products, setProducts] = useState([
    { name: "React.js", price: "99 $" },
    { name: "Node.js", price: "69 $" },
    { name: "Veu.js", price: "59 $" },
  ]);
  const clickHandler = () => {
    setProducts([
      { name: "React.js", price: "89 $" },
      { name: "Node.js", price: "59 $" },
      { name: "Veu.js", price: "49 $" },
    ]);
  };
  return (
    <div id="title" className="container">
      <h1>shopping App</h1>
      {products.map((product) => {
        return <Product name={product.name} price={product.price} />;
      })}
      <button onClick={clickHandler}>change price</button>
    </div>
  ); 
};

/* const App = () => {
  return (
    <div id="title" className="container">
      <h1>shopping App</h1>
      <Product name="react.js" price="99$" />
      <Product name="node.js" price="50$" />
      <Product name="express.js" price="50$">
        <p>discout is 15%</p>
      </Product>
    </div>
  );
}; */

export default Wrapper(App, "container");
