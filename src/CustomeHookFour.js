import React, { useState } from 'react'
import CustomeHookSix from './CustomeHookSix'

function CustomeHookFour(){

    const [count,increment,decrement,reset]=CustomeHookSix(10,10)

    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


export default CustomeHookFour
