import React from "react";
const Child = ({ handleCount }) => {
  console.log("Child compo. render");
  return (
    <div>
      Child
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default React.memo(Child);
