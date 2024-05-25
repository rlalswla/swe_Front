// src/routes/SignUp.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Makepost = () => {
  const [form, setForm] = useState({
    pjname: '',
    position: '',
    headcount: '',
    techstack: '',
    location: '',
    pjdetail: '',
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value,
        });
    };

    const handlemakepost = (event) => {
        event.preventDefault();
        // 회원가입 로직 추가

        console.log('게시물 정보:', form);
    };

    return (
        <div className='container'>
        <form onSubmit={handlemakepost} className ="makepostbox">
            <div className='inputID'>
            <input className ="inputbox" placeholder='Project Name' type="text" name="pjname" value={form.pjname} onChange={handleChange} required />
            </div>
            <div className ="inputID">
                <select className ="inputbox" placeholder="Position" type="text" name="position" value={form.position} onChange={handleChange} required>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Fullstack">Designer</option>
                </select>
            
            </div>
            <div className = "inputID">
            <select className ="inputbox" placeholder="Headcount" type="text" name="headcount" value={form.headcount} onChange={handleChange} required >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
            </select>

            </div>
            <div className ="inputID">
            <input className ="inputbox" placeholder="Tech Stack" type="text" name="techstack" value={form.techstack} onChange={handleChange} required />
            </div>
            <div className = "inputID">
            <select className ="inputbox" placeholder="Location" type="text" name="location" value={form.location} onChange={handleChange} required >
                <option value="Seoul">Seoul</option>
                <option value="Busan">Busan</option>
                <option value="Daegu">Daegu</option>
                <option value="Daejeon">Daejeon</option>
                <option value="Gwangju">Gwangju</option>
                <option value="Incheon">Incheon</option>
                <option value="Ulsan">Ulsan</option>
            </select>
            </div>
            <div className ="inputID">
            <input className ="inputbox" placeholder="Project Detail" type="text" name="pjdetail" value={form.pjdetail} onChange={handleChange} required />
            </div>
            <div className ="button">
            <button type="submit">
                <Link style ={{color: '#000000', textDecoration:'none' }} to="/Login">Make Post</Link>
            </button>
            </div>
        </form>
        </div>
    );

}

export default Makepost;

