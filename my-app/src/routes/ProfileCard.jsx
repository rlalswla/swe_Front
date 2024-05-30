import styled from "styled-components";
import data from "../data.js";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  width: 300px;
  height: 200px;
  margin: 10px auto 2px;
  background: #eeeeee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;

const ProfilePic = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 148px;
  top: 25px;
  background-image: url("./asset/image/Ellipse6.png");
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Info = styled.p`
  color: #666;
  font-size: 14px;
  margin: 10px 0 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export default function ProfileCard() {
  const navigate = useNavigate();
  const projectInfo = data[0];

  const EditButtonClick = () => {
    navigate("/accountInformation");
  };

  return (
    <Card>
      <ProfilePic />
      <div className="profile-info">
        <Info>{projectInfo.author}</Info>
        <Info>{`${projectInfo.location} | ${projectInfo.positions[0]}`}</Info>
      </div>
      <div className="profile-edit">
        <Button onClick={EditButtonClick}>Edit My Profile</Button>
      </div>
    </Card>
  );
}
