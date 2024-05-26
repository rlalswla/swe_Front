import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TeamMemberList from './TeamMemberList.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  // background-color: rgba(6, 51, 29, 1);
  // color: white;
`;

export default function TeamEvaluation() {
  const navigate = useNavigate();

  const handleMemberClick = (memberId) => {
    navigate(`/evaluation/${memberId}`);
  };

  return (
    <Container>
      <Header>
        <button className="back-button">←</button>
        <h1>Team Evaluation</h1>
      </Header>
      <h2>Please select the team member to evaluate.</h2>
      <div className="team-member-list">
        <TeamMemberList onMemberClick={handleMemberClick} />
      </div>
    </Container>
  );
}
