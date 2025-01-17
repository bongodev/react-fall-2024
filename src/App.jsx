import { useState } from 'react';

function Counter({ count, increaseCount }) {
  return (
    <div>
      <h1 className="text-3xl">Count: {count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return <Counter count={count} increaseCount={increaseCount} />;
}
