import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const inputRef = useRef(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
    countRef.current = count; 
  }, [count]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const resetCount = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">Counter: {count}</h1>
      <div>
        <button 
          onClick={increment} 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
        <button 
          onClick={resetCount} 
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
        >
          Reset
        </button>
      </div>
     
    </div>
  );
};

export default Counter;
