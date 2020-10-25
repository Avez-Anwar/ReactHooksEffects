import React,{ useEffect,useState } from "react"
import CustomeHookThree from "./CustomeHooks/CustomeHookThree"

function CustomeHookOne() {
    const[counter,setCounter] = useState(0)
     CustomeHookThree(counter) // This line of code is derived from useEffect costume Hook
    return (
       <div>
        <button onClick={(()=>setCounter(counter+1))}>Click :- {counter}</button>
        </div>
    )
}

export default CustomeHookOne
