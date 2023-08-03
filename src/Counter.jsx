import { useState } from "react";
import { motion } from "framer-motion";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="flex justify-center items-center flex-col gap-8 w-[100vw] h-[100vh] bg-[#344151]">
      <div className="text-white flex justify-center text-2xl">
        Increment & Decrement
      </div>
      <div className="bg-white flex py-3 rounded-sm text-[25px] gap-12">
        <button
          onClick={handleDecrement}
          className="border-r-2 text-center w-20 text-5xl"
        >
          -
        </button>
        <div className="text-5xl gap-12 font-bold">{count}</div>
        <button
          onClick={handleIncrement}
          className="border-l-2 text-center w-20 text-5xl"
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={handleReset}
          className="px-5 py-2 text-lg rounded-sm text-white bg-[#0398d4]"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
