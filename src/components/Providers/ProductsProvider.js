import React, { useState, useContext } from "react";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "React.js", price: "99 $", id: 1, quantity: 1 },
    { name: "Node.js", price: "69 $", id: 2, quantity: 2 },
    { name: "Veu.js", price: "59 $", id: 3, quantity: 3 },
  ]);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => {
  const setProducts = useContext(ProductContextDispatcher);
  const products = useContext(ProductContext);
  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };
  const incrementHandler = (id) => {
    // 1- id==> ok
    // 2- index
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    // 3- clone the selected index and update the quantity
    product.quantity++;
    const UpdatedProducts = [...products];
    UpdatedProducts[index] = product;
    setProducts(UpdatedProducts);
  };
  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };

    if (product.quantity === 1) {
      const filteredItem = products.filter((p) => p.id !== id);
      setProducts(filteredItem);
    } else {
      const UpdatedProducts = [...products];
      product.quantity--;
      UpdatedProducts[index] = product;
      setProducts(UpdatedProducts);
    }
  };

  const changeHandler = (e, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    // 3- clone the selected index and update the value
    product.name = e.target.value;
    const UpdatedProducts = [...products];
    UpdatedProducts[index] = product;
    setProducts(UpdatedProducts);
  };
  return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
