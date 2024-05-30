
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TabBar from './TabBar';
import PostCard from "./PostCard";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

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

const PostCardWrapper = styled.div`
  display: flex;
  justify-content: center; // 내부 아이템을 가운데 정렬
  width: 100%; // 폭을 100%로 설정하여 부모 컨테이너의 폭에 맞춤
  margin-bottom: 20px; // 각 카드 아래에 마진 추가
`;

const PostList = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height:5%;
    border: none;
    background: rgba(196, 196, 196, 0.2);
    padding: 0;
    margin-bottom: 15px;
    align-self: center;
    border-radius: 10px;
`;

const SearchIcon = styled(CiSearch)`
    margin-left: 10px;
`;

const Searchbox = styled.input`
    flex-grow: 1;
    border: none;
    background: transparent;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 600;
    outline: none;
`;

const SearchButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 5%;
    
    
`;


const SearchButton = styled.button`
    background: rgba(196, 196, 196, 0.2);
    width:30%;
    height: 5%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
    font-size: 12px;    
    font-weight: 600;
    color: black;
    display: flex;
    justify-content: left;
    align-items: center;
    justify-content: space-between;
    
`;



const Main = () => {
    const posts = [
        {
          title: "SKKU Application",
          location: "Suwon",
          description:
            "We are recruiting developers and designers to join our side project.",
          roles: ["Front-end", "Back-end", "Designer"],
          recruitingInfo: "Recruiting 1/7",
        },
    
        // 추가 게시물 정보를 여기에 포함할 수 있습니다.
      ];

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/applicationList"); // ApplicationList 페이지로 네비게이션
      };

    


    const [form, setForm] = useState({
        projectname: '',
        status: true,
        position: 0 ,
        stack: [],
    });
    
    const [showPopup, setShowPopup] = useState(false);


    return (
        <Mainpage>
            <Header>
                <Title>SKKU Recruit</Title>
            </Header>
            <Title1>All Projects</Title1>
            <SearchWrapper>
                <SearchIcon />
                <Searchbox placeholder='Search' />
            </SearchWrapper>

            <SearchButtonWrapper>
            <SearchButton>Status<IoIosArrowDown /></SearchButton>
            <SearchButton>Position<IoIosArrowDown /></SearchButton>
            <SearchButton>Tech Stack<IoIosArrowDown /></SearchButton>
            </SearchButtonWrapper>


            {posts.map((post, index) => (
                <PostCardWrapper key={index} onClick={handleCardClick}>
                    <PostCard {...post} />
                </PostCardWrapper>
            ))}


            <h1>main^^;;</h1>
            <TabBar></TabBar>
        </Mainpage>
    
        




    );
}

export default Main;