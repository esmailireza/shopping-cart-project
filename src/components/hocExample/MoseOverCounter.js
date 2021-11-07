import WithCount from "./withCount";

const MoseOverCounter = ({ count, incrementCountHandler }) => {
  return (
    <div>
      <button onMouseOver={incrementCountHandler}>Click</button>
      <h5>{count}</h5>
    </div>
  );
};

export default WithCount(MoseOverCounter, 10);
