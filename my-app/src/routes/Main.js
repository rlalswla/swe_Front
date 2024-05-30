
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TabBar from './TabBar';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #0e442a;
  color: white;
  width: 100vw;
  height: 50px;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const Title1 = styled.h1`
  font-size: 20px;
  margin-left: 20px;
`;

const Mainpage = styled.div`
    display: flex;
    flex-direction: column;

    width: 393px;
    height: 852px;
    background: #ffffff;
`;



const Main = () => {




    return (
        <Mainpage>
            <Header>
                <Title>SKKU Recruit</Title>
            </Header>
            <Title1>All Projects</Title1>
            <div className ="inputID">
                <input id = "searchbox" className ="inputbox" type="text" placeholder = " Search" required />
            </div>


            <h1>main^^;;</h1>
            <TabBar></TabBar>
        </Mainpage>
    
        




    );
}

export default Main;