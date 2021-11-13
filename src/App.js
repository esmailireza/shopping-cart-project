import React from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
