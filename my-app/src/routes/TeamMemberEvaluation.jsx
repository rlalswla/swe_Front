import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useTeamStore from '../store/useTeamStore.jsx';

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

const ReviewContainer = styled.div``;

export default function TeamMemberEvaluation() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const {
    selectedMember,
    deselectMember,
    fetchTeamMembers,
    teamMembers,
    selectMember,
    markMemberAsEvaluated,
  } = useTeamStore();
  const [ratings, setRatings] = useState({
    performance: 0,
    communication: 0,
    preparation: 0,
    commitment: 0,
  });
  const [review, setReview] = useState('');

  useEffect(() => {
    if (!selectedMember || selectedMember.id !== parseInt(memberId)) {
      const member = teamMembers.find((m) => m.id === parseInt(memberId));
      if (member) {
        selectMember(member);
      } else {
        console.error('Error: Member not found');
        navigate('/evaluation');
      }
    }
  }, [memberId, selectedMember, teamMembers, selectMember, navigate]);

  if (!selectedMember) {
    return <div>Error: Please select a team member to evaluate.</div>;
  }

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: value }));
  };

  const handleSubmit = () => {
    // 로컬 상태 업데이트
    markMemberAsEvaluated(selectedMember.id);
    deselectMember();
    alert('Evaluation submitted successfully!');

    console.log('Team Members after marking as evaluated:', teamMembers);

    const remainingMembers = teamMembers.filter((m) => !m.isEvaluated);
    console.log(remainingMembers);
    if (remainingMembers.length > 0) {
      navigate('/evaluation');
    } else {
      navigate('/project-description');
    }
  };

  return (
    <Container>
      <Header>
        <button className="back-button">←</button>
        <h1>Team Evaluation</h1>
      </Header>
      <h2>How was the project with {selectedMember.name}?</h2>
      {['performance', 'communication', 'preparation', 'commitment'].map(
        (category) => (
          <div key={category} className="rating-category">
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={value <= ratings[category] ? 'star filled' : 'star'}
                onClick={() => handleRatingChange(category, value)}
              >
                ★
              </span>
            ))}
          </div>
        )
      )}
      <ReviewContainer>
        <p>Feel free to leave a review.</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </ReviewContainer>
      <button onClick={handleSubmit}>Submit</button>
    </Container>
  );
}
