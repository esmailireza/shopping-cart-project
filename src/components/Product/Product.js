import { useState } from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = ({ product, change, onDecrement, onIncrement, click }) => {
  return (
    <div className={styles.product}>
      <p>name: {product.name} course</p>
      <p>price: {product.price} </p>

      <input
        type="text"
        onChange={change}
        value={product.name}
        className={styles.input}
      />
      <span className={styles.value}>{product.quantity}</span>
      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.trashBtn
        }`}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.increment}`}
      >
        +
      </button>
      <button onClick={click} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Product;
