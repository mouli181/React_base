
import React, { useState } from 'react'

function UseStateHook() {

    const [count,setCount] =useState(0)

  return (
    <div>
        <p>Count {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
    </div>
  )
}

export default UseStateHook