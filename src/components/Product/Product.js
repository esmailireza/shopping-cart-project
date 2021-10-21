import { useState } from "react";
import styles from "./product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>name: {props.product.name} course</p>
      <p>price: {props.product.price} </p>

      <input
        type="text"
        onChange={props.change}
        value={props.product.name}
        className={styles.input}
      />
      <span className={styles.value}>{props.product.quantity}</span>
      <button onClick={props.onDecrement} className={styles.button}>
        -
      </button>
      <button
        onClick={props.onIncrement}
        className={`${styles.button} ${styles.increment}`}
      >
        +
      </button>
      <button onClick={props.click} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Product;
