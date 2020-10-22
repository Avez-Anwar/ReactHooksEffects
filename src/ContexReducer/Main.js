import React from 'react'
import { useReducer } from 'react';
import ComponentA from "../ContexReducer.js/ComponentA"
import ComponentB from "../ContexReducer.js/ComponentB"
import ComponentC from "../ContexReducer.js/ComponentC"

export const CountContext = React.createContext()

const initialState = 0;
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset" :
            return initialState
        default :
        return state
    }
}

function Main() {
    const[count,dispatch]=useReducer(reducer,initialState)
    return (
    <CountContext.Provider
    value={{countState:count,countDispatch:dispatch}}>
        <div>
        Count:{count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </div>
    </CountContext.Provider>
    )
}

export default Main
