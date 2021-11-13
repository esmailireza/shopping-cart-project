import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProducts();
  const { removeHandler, incrementHandler, decrementHandler, changeHandler } =
    useProductsActions();
  if (products.length === 0) {
    return <div>There is no product in cart</div>;
  }
  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            product={product}
            click={() => removeHandler(product.id)}
            onIncrement={() => incrementHandler(product.id)}
            onDecrement={() => decrementHandler(product.id)}
            change={(e) => changeHandler(e, product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
