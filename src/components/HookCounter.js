import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((prevState) => prevState + 1);
  };
  const addTwoHandler = () => {
    setCount((prevState) => prevState + 2);
  };
  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addTwoHandler}>add two</button>
      <button onClick={addFiveHandler}>add five</button>
    </div>
  );
};

export default HookCounter;
