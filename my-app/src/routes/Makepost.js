// src/routes/SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Makepost = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    pjname: '',
    position: '',
    headcount_design: '',
    headcount_front: '',
    headcount_back: '',
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

    const handlemakepost = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('api/makepost', form);
            if (response.status === 200) {
                alert('게시물이 작성되었습니다.');
                navigate('/Login');
            }
            else {
                alert('게시물 작성에 실패했습니다.');
            }
            
            console.log('response:', response.data);
        } catch (error) {
            console.log('failed to make post:', error);
        }
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
            <select className ="inputbox" placeholder="Headcount-designer" type="text" name="headcount_design" value={form.headcount_design} onChange={handleChange} required >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
            </select>

            </div>

            <div className = "inputID">
            <select className ="inputbox" placeholder="Headcount-front" type="text" name="headcount_front" value={form.headcount_front} onChange={handleChange} required >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
            </select>

            </div>

            <div className = "inputID">
            <select className ="inputbox" placeholder="Headcount-designer" type="text" name="headcount_back" value={form.headcount_back} onChange={handleChange} required >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
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

