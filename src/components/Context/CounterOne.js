import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const setCount = useCountActions();

  const addOne = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={addOne}>add one</button>
    </div>
  );
};

export default CounterOne;
