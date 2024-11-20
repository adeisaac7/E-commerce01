import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import './CSS/Login.css';
import { ShopContext } from '../Context/ShopContext';
import {toast} from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const {token, setToken, backendUrl} = useContext(ShopContext)
  const navigate = useNavigate();
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
        let response;
        if (currentState === 'Sign Up') {
          response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
          if(response.data.success) {
            toast.success("Account created successfully! Redirecting...");
          } else{
            toast.warning("Account already exists!");
            return;
          }
        } else {
          response = await axios.post(backendUrl + '/api/user/login', {email,password})
          if (response.data.success) {
            toast.success("Login successful! Redirecting...");
          } else{
            toast.error("Invalid login credentials.");
            return;
          }
        } 

        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/');
    } catch(error){
      toast.error("An error occurred. Please try again.");
      console.log(error);
    }
  };

  useEffect(()=>{
    if (token) {
        navigate('/');
    }
  },[token, navigate]);

  return(
    <div className='loginOverlay'>
        <form onSubmit={onSubmitHandler}>
            <div className='pageHeader'>
                <p className='currentState'>{currentState}</p>
            </div>

        {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Name'  required/>} 
        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required/>

    <div className='loginBottomContainer'>
        <p className='bottomContent'>Forgot your password?</p>
        {
            currentState === 'Login'
            ? <p  onClick={()=>setCurrentState('Sign Up')} className='btn1'>Create account</p>
            : <p  onClick={()=>setCurrentState('Login')} className='btn2'>Login here</p>
        }
    </div>

    <button className='btn3'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
  </form>
</div>
  );
};

export default Login;
