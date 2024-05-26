import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import PostsList from "./PostsList";

function ProfilePage() {
  const navigate = useNavigate();

  const EditButtonClick = () => {
    navigate("/accountInformation");
  };

  const accountInfo = {
    name: "Sungkyunkwan",
    department: "Department",
    location: "Suwon",
  };

  return (
    <div className="profile-page">
      <header className="header">
        <h1>SKKU Recruit</h1>
      </header>
      {/* <div className="my">
        <h1 className="myProfile">My Profile</h1>
      </div> */}
      <div className="profile-card">
        <div className="profile-section">
          <div className="profile-pic"></div>
          <div className="profile-edit">
            {/* <img src="/path/to/profile-pic.png" alt="Profile" /> */}
            <button onClick={EditButtonClick}>Edit My Profile</button>
          </div>
          <div className="profile-info">
            <p>{accountInfo.name}</p>
            <p>
              {accountInfo.department} | {accountInfo.location}
            </p>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="portfolio">
          <Link to="/portfolio">
            <h2>Portfolio</h2>
          </Link>
          <p>Creating and Refining My Portfolio to Showcase to Others</p>
        </div>
        <div className="posts">
          <Link to="/posts">
            <h2>My Post</h2>
          </Link>
          <p>Exploring and Managing My Posted Content</p>
        </div>
      </div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/posting">Posting</Link>
        <Link to="/scrab">Scrab</Link>
        <Link to="/">Profile</Link>
      </nav>
    </div>
  );
}

export default ProfilePage;
