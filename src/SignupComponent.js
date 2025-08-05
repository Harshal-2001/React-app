import React,{use, useContext}from 'react'
import { LoginContext } from './App'

const SignupComponent = () => {
    // const count=useContext(LoginContext);
    const name=useContext(LoginContext);
  return (
    <div>
        <h1>My Name Is {name}</h1>
      {/* <h1>Sign Up {count}</h1> */}
    </div>
  )
}

export default SignupComponent
