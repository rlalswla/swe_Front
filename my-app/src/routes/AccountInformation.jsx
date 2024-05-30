import React, { useState } from "react";
import TabBar from "./TabBar";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import arrowLeftIcon from "./asset/image/arrow-left-icon.svg";
import { useNavigate } from "react-router-dom";

function AccountInformation() {
  const [userInfo, setUserInfo] = useState({
    username: "Sungkyunkwan",
    studentId: "2024123123",
    password: "********",
    phone: "010-1234-1234",
    department: "Software",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Information:", userInfo);
    alert("Information Saved!");
  };

  const navigate = useNavigate();

  const goBackToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="account-information">
      <Header>
        <StyledArrow onClick={goBackToProfile} />
        <Header_name>SKKU Recruit</Header_name>
      </Header>
      <Title>Account Information</Title>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Label>
            Username
            <InputAccountInfo
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label>
            ID (Student ID)
            <InputAccountInfo
              type="text"
              name="studentId"
              value={userInfo.studentId}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label>
            Password
            <InputAccountInfo
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label>
            Phone number
            <InputAccountInfo
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
          </Label>
        </div>
        <div className="form-group">
          <Label>
            Department
            <InputAccountInfo
              type="text"
              name="department"
              value={userInfo.department}
              onChange={handleChange}
            />
          </Label>
        </div>
        <AccountChangeButton type="submit">Save</AccountChangeButton>
      </form>
      <TabBar />
    </div>
  );
}

export default AccountInformation;

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

const InputAccountInfo = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px 10px 20px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  margin-left: 20px;
`;

const AccountChangeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 8px;

  position: absolute;
  width: 343px;
  height: 52px;
  left: 24px;
  bottom: 97px;

  background: #198155;
  /* Blue Shadow */
  box-shadow: 0px 4px 16px rgba(58, 107, 228, 0.24);
  border-radius: 8px;
`;

const StyledArrow = styled(FaArrowLeft)`
  font-size: 20px;
  color: white;
`;

const BackButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  color: white;
  background-image: url(${arrowLeftIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;
