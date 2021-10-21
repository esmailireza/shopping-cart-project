import React, { Component, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import HookArray from "./components/HookArray";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div id="title" className="container">
        <h1>shopping App</h1>
        <ProductList />
      </div>
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

export default App;
