import { useState } from "react";

const MyComponent = () => {
  const [state, setState] = useState({ count: 0 });

  const handleClick = () => {
    setState({ count: state.count + 1 });
  };
  if (state.count > 10) {
    throw new Error("count is to high");
  }
  return (
    <div>
      MyComponent
      <h2>{state.count}</h2>
      <button onClick={handleClick}>Inc</button>
    </div>
  );
};

export default MyComponent;
