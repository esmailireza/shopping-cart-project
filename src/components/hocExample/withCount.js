import { useState } from "react";
const WithCount = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCountHandler = () => {
      setCount(count + incrementValue);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCountHandler={incrementCountHandler}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default WithCount;
