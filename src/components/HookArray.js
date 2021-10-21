import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    setItem([
      ...item,
      {
        id: item.length,
        number: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItemHandler}>add item</button>
      {item.map((itemm) => {
        return <li key={item.id}> {itemm.number}</li>;
      })}
    </div>
  );
};

export default HookArray;
