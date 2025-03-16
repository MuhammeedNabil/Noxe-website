/* eslint-disable eqeqeq */
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css'

export default function Register() {
  let [user,setUser]=useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:'',
  });

  let [errorMsg,setErrorMsg]=useState('');
  let [errorMsgInput,setErrorMsgInput]=useState([]);
  let [loading,setLoading]=useState(false);
 
  async function submitFormData(e){
    e.preventDefault();
    setLoading(true);
    let validateResponse = validateForm();
    if (validateResponse.error){
      setErrorMsgInput(validateResponse.error.details);
    }
    else{
      // Simulate successful registration
      localStorage.setItem('userToken', 'mock_token');
      goToLogin();
    }
    setLoading(false);
  };

  function validateForm(){
    const schema = Joi.object({
      first_name:Joi.string().alphanum().required().min(3).max(10),
      last_name:Joi.string().alphanum().required().min(3).max(10),
      age:Joi.number().required().min(18).max(99),
      email:Joi.string().required().email({tlds:{allow:["net","com"]}}),
      password:Joi.string().required().min(6).max(20).pattern(new RegExp(/^[a-zA-Z0-9_]+$/)),
    });
    return schema.validate(user, {abortEarly:false});
  };

  const navigate = useNavigate();
  function goToLogin(){
    navigate('/home')
  };

  function getFormData(e){
    let myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
  }

  return (
    <>
    <div className='w-75 m-auto my-3'>
    <h1 className='my-2 mt-3'>Registration Form</h1>
    
    <form onSubmit={submitFormData}>
      <div className="input-gb">
      <label htmlFor="first_name" className='my-2'>First Name</label>
      <input onChange={getFormData} type="text"  className='form-control' name='first_name'/>
      </div>

      <div className="input-gb">
      <label htmlFor="last_name" className='my-2'>Last Name</label>
      <input onChange={getFormData} type="text"  className='form-control' name='last_name'/>
      </div>

      <div className="input-gb">
      <label htmlFor="age" className='my-2'>Age</label>
      <input onChange={getFormData} type="number"  className='form-control' name='age'/>
      </div>

      <div className="input-gb">
      <label htmlFor="email" className='my-2'>email</label>
      <input onChange={getFormData} type="email"  className='form-control' name='email'/>
      </div>

      <div className="input-gb">
      <label htmlFor="password" className='my-2'>Password</label>
      <input onChange={getFormData} type="password"  className='form-control' name='password'/>
      </div>

      {errorMsgInput.map((error,index)=><div key={index} className='text-danger'>{error.message}</div>)}
      {errorMsg?<div className="alert alert-danger mt-4">{errorMsg}</div>:''}

      <button type='submit' className='btn btn-info float-end my-3' disabled={loading}>{loading?"Please Wait....":'Register'}</button>
      <div className={`${styles.clearFix}`}></div>
      
    </form>
    </div>
    </>
  )
}
