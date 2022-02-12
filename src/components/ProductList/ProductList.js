import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();
  if (products.length === 0) {
    return <div>There is no product in cart</div>;
  }
  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            click={() => dispatch({ type: "remove", id: product.id })}
            onIncrement={() => dispatch({ type: "increment", id: product.id })}
            onDecrement={() => dispatch({ type: "decrement", id: product.id })}
            change={(e) => dispatch({ type: "edit", id: product.id, event: e })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
