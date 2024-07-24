import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prevState) => {
            console.log(prevState);
            return count + 1;
          });
        }}
      >
        Click
      </button>
      {count}
    </div>
  );
};

export default Count;
