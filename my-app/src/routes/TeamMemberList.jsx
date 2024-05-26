import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useTeamStore from '../store/useTeamStore.jsx';

const Button = styled.button`
  display: flex;
  border: 1px solid #000;
  margin-bottom: 10px;
  width: 345px;
  height: 72px;
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
`;

export default function TeamMemberList() {
  const { teamMembers, fetchTeamMembers, selectMember } = useTeamStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  const handleMemberClick = (member) => {
    selectMember(member);
    navigate(`/evaluation/${member.id}`);
  };

  return (
    <div className="container">
      {teamMembers.map((member) => (
        <Button
          key={member.id}
          className="team-member"
          onClick={() => handleMemberClick(member)}
        >
          <div className="avatar"></div>
          <div className="team-member-info">
            <p>{member.name}</p>
            <p>{member.position}</p>
          </div>
        </Button>
      ))}
    </div>
  );
}
