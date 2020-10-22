import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function HookCounter() {
    const[count,setCount]=useState(0)

    const tick=()=>{
        setCount(prevcount=>(prevcount+1))
    }

    useEffect(()=>{
      const interval=setInterval(tick,1000)
      return(()=>{
          clearInterval(interval)

      })
    },[])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default HookCounter
