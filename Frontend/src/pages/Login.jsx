import React from 'react'
import styled from 'styled-components';
import Image from '../components/Image';

import {signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

 export default function Login() {
  const[formvalues,setformvalues]=useState({
    email:"",
    password:""
  })
  const[errors,seterrors]=useState({})
    const validateform=()=>{
      let errors={};

      if(!formvalues.email){errors.email="email is required"}
      else if(!/\S+@\S+\.\S+/.test(formvalues.email)){errors.email='email is invalid'}
        
      if (!formvalues.password){errors.password='password is required'}

      
   
     return errors;
    }
    const handlesubmit=(e)=>{
      e.preventdefault();

      const validationErrors = validateform();
  seterrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    
    console.log('Form submitted', formvalues);
  }
    }
  
  const handlelogin=async ()=>{
    try {
      const{email,password}=formvalues;
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    } catch (err) {
      console.log(err)
    }
  }
  
  return(
    <Container>
    
    
    <div className="body">
    
        <Image/>
        <br /><br /><br />
     <div className="one">
      <div className="form" >
        <h3>Log In</h3>
        <input type="email" placeholder='Email address' name='email' value={formvalues.email} onChange={(e)=>setformvalues({...formvalues,[e.target.name]:e.target.value})} />
        <input type="password" placeholder='Password' name='password' value={formvalues.password} onChange={(e)=>setformvalues({...formvalues,[e.target.name]:e.target.value})} />
        
        <button type='submit' className='login'onClick={handlelogin}>Login to your account</button>
      </div>
      <div className="text">
      <p>Don't have an account ?</p>
      <Link className='signup' to={"/signup"}>SignUp</Link>
      
      </div>
      </div>
    </div>
    </Container>
  
)
}
const Container=styled.div`


.body{
 display: flex;
 flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 100vh;
    
    padding: 10px;
    background-color: #14141484;
    
    
    border:solid;
    border-radius: 8px;


}
.form{
display:flex;
flex-direction:column;
gap:15px;
width:40vh


}
.text{
display:flex;
align-items: center;
gap: 5px;
}

input{
border-top:none;
border-left:none;
border-right:none;
border-color: #685353;
height: 20px;
background-color: #877d92;

}
input::placeholder{
  color: white;
}
.login{
background-color:rgba(223, 0, 0, 0.553);
color: white;
height: 30px;
border-radius: 5px;
}
.signup{
border:none;
color:red;
background: none;
text-decoration: none;



}
p,h3{
color: white;
}
.one{
  border: solid;
  border-radius: 10px;
  padding: 10px;
  background-color: #877d92;
}
`;

  



