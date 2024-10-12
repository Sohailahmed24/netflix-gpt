import { useRef, useState } from "react"
import { BackgroundImg } from "../Utils/Images"
import Header from "./Header"
import { checkValidData } from "../Utils/Validate"

const Login=()=>{
    const [isSignIn,setIsSignIn]=useState(true)
    const [errorMassage,setErrorMassage]=useState(null)
    const email=useRef()
    const passowrd=useRef()
    const fullName=useRef()
    console.log(email)
    const handleToggle=()=>{
        setIsSignIn(!isSignIn)
    }

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(fullName.current.value,"name")
        console.log(email.current.value)
    const message= checkValidData(email.current.value,passowrd.current.value,fullName.current.value)
       console.log(message)
       setErrorMassage(message)
    }
    return(
        <div>
              <Header/>
              <div className="absolute">
                 <img src={BackgroundImg} alt="backgroundImg"/>
              </div>
              <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80" >
                         <h1 className="font-bold text-3xl py-3">{isSignIn?"Sign In":"Sign Up"}</h1>
                   <input type="text" ref={email} placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700" />

                   {!isSignIn && (<input type="text" ref={fullName} placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700" />
)}
                   <input type="password" ref={passowrd} placeholder="Password" className="p-3 my-3 w-full  bg-gray-700" />
                   <p className="text-red-700 font-bold">{errorMassage}</p>
                   <button className="bg-red-700  my-6 p-3 w-full rounded-lg" onClick={handleClick} >{isSignIn?"Sign In":"Sign Up"}</button>
                   <h className=" py-1">New to Netflix? 
                    <span className="font-bold cursor-pointer " onClick={handleToggle} >{isSignIn?"Sign up now":"Sign In"}</span></h>
              </form>
        </div>
    )
}

export default Login