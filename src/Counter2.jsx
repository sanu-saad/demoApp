import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      counter2
      <h4>{count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
    </div>
  );
};

export default Counter2;
