import { useEffect, useState } from "react";

const FunctionalCounter2 = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component did update");
    document.title = `clicked: ${count} times`;
  }, [count]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
    </div>
  );
};

export default FunctionalCounter2;
