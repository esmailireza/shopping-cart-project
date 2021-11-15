import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();
/* const initialState = [
  { name: "React.js", price: "99 $", id: 1, quantity: 1 },
  { name: "Node.js", price: "69 $", id: 2, quantity: 2 },
  { name: "Veu.js", price: "59 $", id: 3, quantity: 3 },
]; */

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const UpdatedProducts = [...state];
      UpdatedProducts[index] = product;

      return UpdatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };

      if (product.quantity === 1) {
        const filteredItem = state.filter((p) => p.id !== action.id);
        return filteredItem;
      } else {
        const UpdatedProducts = [...state];
        product.quantity--;
        UpdatedProducts[index] = product;
        return UpdatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      // 3- clone the selected index and update the value
      product.name = action.event.target.value;
      const UpdatedProducts = [...state];
      UpdatedProducts[index] = product;
      return UpdatedProducts;
    }
    case "remove":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    case "filter":
      /* console.log(`clicked-->${action.event.target.value}`); */
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const UpdatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
        );
        return UpdatedProducts;
      }
    case "sort":
      const products = [...state];
      if (action.selectedOption.value === "lowest") {
        const sortedProducts = products.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
        return sortedProducts;
      } else {
        const sortedProducts = products.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        });
        return sortedProducts;
      }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => {
  return useContext(ProductContextDispatcher);
};
