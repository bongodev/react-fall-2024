import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount((preCount) => preCount - 1)}>-</button>
      </div>
    </div>
  );
};
