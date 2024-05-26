import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import "./PostsList.css";

function PostsList() {
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

  const navigate = useNavigate(); // useNavigate 훅을 사용해 navigation 기능을 구현

  const handleCardClick = () => {
    navigate("/applicationList"); // ApplicationList 페이지로 네비게이션
  };

  return (
    <div className="posts-list">
      {/* <div className="home-link">
        <Link to="/">Home</Link>
      </div> */}
      {posts.map((post, index) => (
        <div key={index} onClick={handleCardClick}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
