import styled from 'styled-components';
import useProjectStore from '../store/useProjectStore';

const RadioButtonLabel = styled.label`
  margin-right: 10px;
  display: block;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const PositionRadioButtons = ({ selectedPosition, setSelectedPosition }) => {
  const { projectData } = useProjectStore();

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <>
      {projectData &&
        projectData.positions.map((position, index) => (
          <RadioButtonLabel key={index}>
            <RadioButton
              type="radio"
              name="position"
              value={position}
              checked={selectedPosition === position}
              onChange={handlePositionChange}
            />
            {position}
          </RadioButtonLabel>
        ))}
    </>
  );
};

export default PositionRadioButtons;
