// src/routes/SignUp.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: '',
    pw: '',
    name: '',
    studentId: '',
    major: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignUp = async (event) => {
    
    event.preventDefault();
    // 회원가입 로직 추가
    

    try {
      const response = await axios.post('api/signup', form);
      if (response.status === 200) {

        alert('회원가입이 완료되었습니다.');
        navigate('/Login');
      }
      console.log('response:', response.data);


    } catch (error) {
      console.log('failed to sign up:', error);
    }
    console.log('회원가입 정보:', form);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSignUp} className ="signupbox">
        <div className='inputID'>
          <input className ="inputbox" placeholder='ID' type="text" name="id" value={form.id} onChange={handleChange} required />
        </div>
        <div className ="inputID">
          <input className ="inputbox" placeholder="PW" type="password" name="pw" value={form.pw} onChange={handleChange} required />
        </div>
        <div className = "inputID">
          <input className ="inputbox" placeholder="Name" type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className ="inputID">
          <input className ="inputbox" placeholder="Student ID" type="text" name="studentId" value={form.studentId} onChange={handleChange} required />
          
        </div>
        <div className = "inputID">
          <input className ="inputbox" placeholder="Major" type="text" name="major" value={form.major} onChange={handleChange} required />
          
        </div>
        <div className ="inputID">
          <input className ="inputbox" placeholder="Phone" type="text" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className ="button">
          <button type="submit" style ={{color: '#000000', textDecoration:'none' }} > Sign In </button>
            
          
        </div>
      </form>
    </div>
  );
};

export default SignUp;
