import React, { useState } from 'react'
import './CSS/Loginsignup.css'

function LoginSingup() {
  const [state,setState] = useState("Login");
const [formData,setFormData]=useState({
  username:"",
  password:"",
  email:" "
})
const changeHandler = (e)=>{
  setFormData({
  ...formData,[e.target.name]:e.target.value
  })
}
  const login = async ()=>{
console.log("Loged inn",formData)
let responseData;
await fetch('https://backend-server-2.onrender.com/login',{
  method:'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData)
}).then((res)=>res.json()).then((data)=>responseData=data)
    
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");
}
else{
  alert(responseData.errors)
}
  }

  const signup = async ()=>{
console.log("sign inn",formData)
let responseData;
await fetch('https://backend-server-2.onrender.com/signup',{
  method:'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData)
}).then((res)=>res.json()).then((data)=>responseData=data)
    
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");
}
else{
  alert(responseData.errors)
}
  }
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
<h1>{state}</h1>
<div className='loginsignup-fields'>
{state=== "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' /> :<></>}
<input  name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address'></input>
<input name='password'  value={formData.password} onChange={changeHandler} type='password'  placeholder='password'></input>
</div>
<button onClick={()=>{state ==="Login" ? login():signup()}}>Continue</button>
 {state === "Sign Up"  ?   <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login Here</span></p> :       <p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>
}

    <div className='loginsignup-agree'> 
<input type='checkbox' name='' id=''></input>
<p>By continuing , i agree to the terms and conditions</p>
    </div>
      </div>
    </div>
  )
}

export default LoginSingup
