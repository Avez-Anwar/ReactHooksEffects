import React, { useState } from 'react'
import UserInputForm from './UserInputForm'


function UserForm() {

    const[firstName,bindFirstName,resetFirstName] = UserInputForm("")
    const[lastName,bindLastName,resetLastName] = UserInputForm("")

   const submitHandler = (e) =>{
      e.preventDefault()
      alert(`Hello ${firstName} ${lastName} `)
      resetFirstName()
      resetLastName()
   }
    return (
        <div>
        <form onSubmit={submitHandler}>
        <div>
            <label >First Name</label>
            <input type="text" {...bindFirstName}/>
        </div>
        <div>
            <label >Last Name</label>
            <input type="text" {...bindLastName}/>
        </div>
        <button onClick>Submit</button>
        </form>
            
        </div>
    )
}

export default UserForm
