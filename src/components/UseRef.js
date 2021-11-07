import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const previousValue = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input type="text" onChange={changeHandler} value={inputValue} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
    </div>
  );
};

export default UseRef;
