import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ApplicationCard({ id, name, roles, phone }) {
  const navigate = useNavigate(); // useNavigate 훅을 사용해 navigation 기능을 구현
  const goToApplicationPort = () => {
    navigate("/posts");
  };
  return (
    <ApplicationCardContainer>
      <Header>
        <InfoSection>
          <Title>{name}</Title>
          <Roles>
            {roles.map((role, index) => (
              <RoleButton key={index}>{role}</RoleButton>
            ))}
          </Roles>
          <h1 onClick={goToApplicationPort}>Portfolio</h1>
          <Phone>{phone}</Phone>
        </InfoSection>
        <Actions>
          <ConfirmButton>Confirm</ConfirmButton>
        </Actions>
      </Header>
    </ApplicationCardContainer>
  );
  {
    // applicants.map((applicant) => (
    //   <div key={applicant.id} className="applicant">
    //     <h3>
    //       {applicant.name} - {applicant.role}
    //     </h3>
    //     <p>Phone Number: {applicant.phone}</p>
    //     <button onClick={() => handleSubmit(applicant.id)}>Confirm</button>
    //     <Link to={`/applicationPortfolio/${applicant.id}`}>Portfolio</Link>
    //   </div>
    // ));
  }
}

const ApplicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 343px;
  height: 180px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 8px;
  color: #333;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
  justify-content: space-around;
`;

const RoleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 24px;
  width: 88px;
  background: #f2f4f5;
  border-radius: 32px;
  border: none;
  font-size: 12px;
  color: #333;
`;

const Phone = styled.span`
  color: #666;
  font-size: 14px;
`;
