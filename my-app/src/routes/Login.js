// src/routes/Login.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // 로그인 로직 추가
    console.log('ID:', id);
    console.log('PW:', pw);
  };

  return (
    <div className='container'>
      <form onSubmit={handleLogin} className = "loginbox">
        
        <div className ="inputID">
          <input className ="inputbox" type="text" placeholder = " ID" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div className ="inputID">
          <input className =" inputbox" type="password" placeholder = " Password" value={pw} onChange={(e) => setPw(e.target.value)} required />
        </div>
        <div className ="button">
          <button type="submit">
            <Link style = {{color: '#000000', textDecoration:'none' }} to="/signup">Sign In</Link>
          </button> 

          <button type="submit">
          <Link style = {{color: '#000000', textDecoration:'none' }} to="/mainpage">Login</Link> 
          {/* 로그인 유효성 판단후 mainpage 라우팅 해야함 */}
          </button>
        </div>
      </form>
      
      <img src = "/Loginbtmpic.png" alt = "Loginbtmpic" id = "lgpic2" />
    </div>
  );
};

export default Login;
