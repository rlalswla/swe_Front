import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ApplicationCard({ id, name, roles, phone }) {
  const navigate = useNavigate();
  const goToApplicationPort = () => {
    navigate("/applicationPort");
  };

  return (
    <ApplicationCardContainer>
      <Header>
        <Title>{name}</Title>
        <PortButton onClick={goToApplicationPort}>Portfolio &gt;</PortButton>
      </Header>
      <Roles>
        {roles.map((role, index) => (
          <RoleP key={index}>{role}</RoleP>
        ))}
      </Roles>
      <Wrapper>
        <PhoneWrapper>
          <PhoneLabel>Phone Number</PhoneLabel>
          <Phone>{phone}</Phone>
        </PhoneWrapper>
        <ConfirmButton>Confirm</ConfirmButton>
      </Wrapper>
    </ApplicationCardContainer>
  );
}

const ApplicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 323px;
  margin: 10px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PortButton = styled.button`
  background-color: transparent;
  color: #4caf50;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

const Title = styled.h3`
  margin: 8px;
  color: #333;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ConfirmButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
`;

const Roles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const RoleP = styled.p`
  margin: 0 10px;
  font-size: 12px;
  color: #333;
`;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f2f4f5;
  border-radius: 8px;
  padding: 8px;
`;

const PhoneLabel = styled.span`
  color: #666;
  font-size: 12px;
  margin-right: 10px;
`;

const Phone = styled.span`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;
