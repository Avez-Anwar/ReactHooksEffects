import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

function DataFetchingOne() {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    const[post,setPost]=useState({})

   useEffect(()=>{
       axios
       .get("https://jsonplaceholder.typicode.com/posts/1")
       .then((response)=>{
          setPost(response.data)
          setLoading(false)
          setError("")
       })
       .catch(()=>{
           setPost(false)
           setLoading(false)
           setError("Something went wrong")
       })
   },[])

    return (
        <div>
        {loading?"Loading":post.title}
        {error?error:null}
            
        </div>
    )
}

export default DataFetchingOne
