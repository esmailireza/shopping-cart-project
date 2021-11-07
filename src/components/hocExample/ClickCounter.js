import WithCount from "./withCount";
const ClickCounter = ({ count, incrementCountHandler, name }) => {
  return (
    <div>
      <button onClick={incrementCountHandler}>Click</button>
      <h5>{count}</h5>
    </div>
  );
};

export default WithCount(ClickCounter, 5);
