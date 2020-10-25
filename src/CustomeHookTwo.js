import React,{ useEffect,useState } from "react"
import CustomeHookThree from "./CustomeHooks/CustomeHookThree"

function CustomeHookTwo() {
    const[counter,setCounter] = useState(0)
      CustomeHookThree(counter)
    return (
       <div>
        <button onClick={()=>setCounter(counter+1)}>Click :- {counter}</button>
        </div>
    )
}

export default CustomeHookTwo
