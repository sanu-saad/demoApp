import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(1);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
      <Child handleCount={handleCount} />
    </div>
  );
};

export default Parent;
