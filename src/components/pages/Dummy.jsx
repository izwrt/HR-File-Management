import { default as React, default as React, useState } from 'react';

const fruits =[
    "dummyone", "Orange", "Banana", "Grapes"
];

const Dummy = () => {
  const [count, setCount] = useState(0);

  const logMessage = (() => {
    console.log("hy");
  }); // Immediately invoked, not a function reference

  return (
    <div className='m-72'>
      <button onClick={logMessage}>Click Me (Direct Invoke)</button>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  );
};


export default Dummy
