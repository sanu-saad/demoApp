import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      Counter
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
    </div>
  );
};

export default Counter;
