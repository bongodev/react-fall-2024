import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count === 15) {
      alert('Maximum limit reached');
      return;
    }
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      alert('Minimum limit reached');
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="text-center drop-shadow-lg p-4 rounded-md max-w-[400px] mx-auto bg-cyan-300 h-[40vh] my-10">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <h1 className="text-3xl font-bold mt-6">{count}</h1>
      <div className="flex gap-4 justify-center items-center my-6 text-2xl">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={increaseCount}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded ml-2"
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={resetCount}
      >
        &#x21bb;
      </button>
    </div>
  );
};
