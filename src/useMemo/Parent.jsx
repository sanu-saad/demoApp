import { useMemo, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(1);

  const multiCount = useMemo(() => {
    console.log("render");
    return count * 5;
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc Count</button>
      {multiCount}
      <h2>{item}</h2>
      <button onClick={() => setItem((prev) => prev + 1)}>Inc Item</button>
    </div>
  );
};

export default Parent;
