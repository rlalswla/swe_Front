import React from 'react';
import styled from 'styled-components';
// Edit, Delete, Close 버튼을 추가하고, PostCard 컴포넌트를 완성하세요.
function PostCard({ title, location, description, roles, recruitingInfo }) {
  return (
    <PostCardContainer>
      <Header>
        <Title>{title}</Title>
        <Location>{location}</Location>
      </Header>
      <Description>{description}</Description>
      {/* <Roles>
        {roles.map((role, index) => (
          <RoleButton key={index}>{role}</RoleButton>
        ))}
      </Roles> */}
      <Actions>
        <RecruitingInfo>{recruitingInfo}</RecruitingInfo>
        <StatusButtonWrapper>
          <StatusButton>Edit</StatusButton>
          <StatusButton>Delete</StatusButton>
        </StatusButtonWrapper>
      </Actions>
    </PostCardContainer>
  );
}

export default PostCard;

const PostCardContainer = styled.div`
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

const Location = styled.span`
  color: #666;
  font-size: 14px;
  margin: 10px;
`;

const Description = styled.p`
  color: #666;
  font-size: 15px;
  margin: -5px 10px;
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

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RecruitingInfo = styled.span`
  color: #4caf50;
  font-weight: bold;
`;

const StatusButton = styled.button`
  padding: 4px 9px;
  font-size: 12px;
  background: #23c16b;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 3px;
`;

const StatusButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  margin-top: 8px;
`;
