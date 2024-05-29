import styled from 'styled-components';
import useProjectStore from '../store/useProjectStore';

const RadioButtonLabel = styled.label`
  display: block;
  margin: 10px;
  margin-left: 0px;
`;

const RadioButton = styled.input`
  margin: 10px;
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
