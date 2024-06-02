import React, { useState } from "react";
import styled from "styled-components";
import DummyMainCard from "./DummyMainCard";

export default function DummyMain() {
  const posts = [
    {
      title: "SKKU Application",
      location: "Suwon",
      description:
        "We are recruiting developers and designers to join our side project.",
      roles: ["Front-end", "Back-end", "Designer"],
      recruitingInfo: "Recruiting 1/7",
    },
    {
      title: "SKKU rectuit",
      location: "Seoul",
      description:
        "We are recruiting developers and designers to join our side project.",
      roles: ["Front-end", "Designer"],
      recruitingInfo: "Recruiting 1/5",
    },
    {
      title: "SKKU Application",
      location: "Suwon",
      description:
        "We are recruiting developers and designers to join our side project.",
      roles: ["Front-end", "Back-end", "Designer"],
      recruitingInfo: "Recruiting 1/7",
    },
  ];

  return (
    <PostList>
      {posts.map((post, index) => (
        <DummyMainCardWrapper key={index}>
          <DummyMainCard {...post} />
        </DummyMainCardWrapper>
      ))}
    </PostList>
  );
}

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

const Title = styled.h1`
  font-size: 24px;
  color: black;
  margin-top: 20px;
  margin-left: 20px;
`;

const PostList = styled.div`
  position: relative;
  width: 393px;
  height: 852px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

const DummyMainCardWrapper = styled.div`
  display: flex;
  justify-content: center; // 내부 아이템을 가운데 정렬
  width: 100%; // 폭을 100%로 설정하여 부모 컨테이너의 폭에 맞춤
  margin-bottom: 20px; // 각 카드 아래에 마진 추가
`;
