import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PositionRadioButtons from './PositionRadioButtons';
import useProjectStore from '../store/useProjectStore';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
`;

const ArrowIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const HeartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

const ApplyButton = styled.button`
  width: 322px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const ClosedLabel = styled.span`
  width: 290px;
  background-color: #ccc;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: not-allowed;
`;

const PositionSelector = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  text-align: left;
  margin-left: 10px;
  margin-bottom: 30px;
`;

export default function PositionSelectBar() {
  const [showPositionSelector, setShowPositionSelector] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('down');
  const [selectedPosition, setSelectedPosition] = useState('');
  const { projectData, setProjectData } = useProjectStore();

  if (!projectData) {
    setProjectData(null);
    return;
  }

  const togglePositionSelector = () => {
    setShowPositionSelector(!showPositionSelector);
    setArrowDirection((prevDirection) =>
      prevDirection === 'down' ? 'up' : 'down'
    );
  };

  const handleApplyClick = () => {
    if (!selectedPosition) {
      alert('Please select a position to apply.');
      if (arrowDirection === 'down') {
        togglePositionSelector();
      }
      return;
    }

    const payload = {
      position: selectedPosition,
    };

    // 선택한 포지션과 함께 지원자의 정보, 포트폴리오 전달해야 함
    axios
      .post('/api/apply', payload)
      .then((response) => {
        alert('Application submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting application:', error);
        alert('Failed to submit application.');
      });
  };

  return (
    <Container>
      {projectData.status !== 'closed' && (
        <ArrowIcon onClick={togglePositionSelector}>
          {arrowDirection === 'down' ? '↑' : '↓'}
        </ArrowIcon>
      )}
      <PositionSelector show={showPositionSelector}>
        <h2>Position</h2>
        <p>Select the position you want to apply for</p>
        <PositionRadioButtons
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
      </PositionSelector>
      <ButtonContainer>
        <HeartButton>♡</HeartButton>
        {projectData.status === 'recruiting' ? (
          <ApplyButton onClick={handleApplyClick}>Apply</ApplyButton>
        ) : projectData.status === 'closed' ? (
          <ClosedLabel>Closed</ClosedLabel>
        ) : null}
      </ButtonContainer>
    </Container>
  );
}
