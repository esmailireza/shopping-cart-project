import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "addFive":
      return state + action.value;
    case "decrement":
      return state - action.value;

    default:
      return state;
  }
};
const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "addFive", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement one
      </button>
      <h2>count two is :{countTwo}</h2>
      <button onClick={() => dispatchTwo({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatchTwo({ type: "addFive", value: 5 })}>
        add five
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        decrement one
      </button>
    </div>
  );
};

export default CountReducer;
