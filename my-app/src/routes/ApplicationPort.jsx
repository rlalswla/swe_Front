import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TabBar from "./TabBar";
import { FaArrowLeft } from "react-icons/fa";

export default function ApplicationPort() {
  const navigate = useNavigate();
  const goBackToPostList = () => {
    navigate("/applicationList");
  };

  const data = `
  ✔️ Introduction:
Hello! My name is Seungji Lee, and I am a passionate and dedicated web developer with a strong focus on creating user-centric web applications. Over the years, I have honed my skills in both front-end and back-end development, ensuring that I deliver efficient, scalable, and maintainable code. My journey in web development has been driven by a deep love for technology and a constant desire to learn and grow.

  ✔️ Technical Skills:
Front-End: HTML, CSS, JavaScript, React, Vue.js
Back-End: Node.js, Express, Django, Ruby on Rails
Databases: MongoDB, PostgreSQL, MySQL
Others: Git, Docker, AWS, RESTful API, GraphQL

  ✔️ Projects:
1. Project Name: E-commerce Website
Description: A responsive e-commerce platform where users can browse, add items to their cart, and make purchases.
Technologies: React, Redux, Node.js, Express, MongoDB
Features:
- User authentication and authorization (JWT-based)
- Product search and filtering
- Cart and order management
- Admin dashboard
`;

  return (
    <Application_port>
      <Header>
        <StyledArrow onClick={goBackToPostList} />
        <Header_name>SKKU Recruit</Header_name>
      </Header>
      <Title>Application's Portfolio</Title>
      <TabBar />
    </Application_port>
  );
}

const Application_port = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #0e442a;
  color: white;
  width: 100vw;
  height: 50px;
  padding: 10px 20px;
`;

const Header_name = styled.h1`
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  flex-grow: 1;
  margin-left: 65px;
`;

const StyledArrow = styled(FaArrowLeft)`
  font-size: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  color: black;
  margin-top: 20px;
  margin-left: 20px;
`;
