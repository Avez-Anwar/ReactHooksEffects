import React, { useEffect } from 'react'

function CustomeHookThree(counter) {
    useEffect(()=>{
        document.title=(`Title Clicked ${counter}`)
    },[counter])
}

export default CustomeHookThree
