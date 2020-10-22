import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";

function DataFetching() {
    const[post,setPost]=useState([])
    const[id,setId]=useState(1)
    const[click,setClick]=useState(1)


    const handleFetch = () =>{
        setClick(id)
    }

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
          console.log(res)
          setPost(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    },[click])

    return (
        <div>
        <input type="text" value={id} onChange={e=>(setId(e.target.value))}/>
        <button type="button" onClick={handleFetch}>Fetch</button>
        <div>{post.title}</div>
        {/*<ul>
        {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}
        </ul>*/}
        </div>
    )
}

export default DataFetching
