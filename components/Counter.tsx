import { useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <Tooltip>
        <TooltipTrigger onClick={incrementCount} className="px-4 py-2 bg-blue-500 text-white rounded">
          Increment
        </TooltipTrigger>
        <TooltipContent>
          {`Random number: ${Math.floor(Math.random() * 100)}`}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Counter;