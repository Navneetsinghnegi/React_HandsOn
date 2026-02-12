import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increase = ()=>{
        setCount(prevCount => prevCount+1);
    }

    const decrease = () => {
        setCount(prevCount => {
            if (prevCount === 0) return prevCount;
            return prevCount - 1;
        });
       
        
    }

    const reset = ()=>{
        setCount(0);
    }

  return (
    <div id='box'>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={()=> increase()}>Increase</button>
        <button onClick={()=> decrease()}>Decrease</button>
        <button onClick={()=> reset()}>Reset</button>
    </div>
  )
}

export default Counter