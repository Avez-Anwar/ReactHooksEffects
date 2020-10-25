import React, { useState,useMemo } from 'react'

function CounterUseMemo() {
    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
 
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven = useMemo( () => {
        let i=0
        while(i<200000000) i++
        return counterOne % 2 === 0
       },[counterOne])
    
    return (
        <div>
        <div><button onClick={incrementOne} >Click one: {counterOne}</button>
        <span >{isEven ? "Even hai" : "Odd hai"}</span>
        </div>
         <div><button onClick={incrementTwo}>Click two: {counterTwo}</button>
         </div>   
        </div>
    )
}

export default CounterUseMemo
