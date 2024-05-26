import styled from 'styled-components';

import useProjectStore from '../store/useProjectStore.jsx';

const Content = styled.div`
  text-align: left;
  margin-top: 30px;
`;

export default function ProjectSummary() {
  const projectData = useProjectStore((state) => state.projectData);

  if (!projectData) {
    return null;
  }

  return (
    <div className="project-summary">
      <h2>{projectData.title}</h2>
      <div className="author-date">
        <span>{projectData.author} </span>
        <span>{projectData.date}</span>
      </div>
      <Content>
        <div className="summary-details">
          <div className="position">
            Position:{' '}
            {projectData.positions.map((position, index) => (
              <span key={index}>{position} </span>
            ))}
          </div>
          <div className="recruitment-number">
            Recruitment Number: {projectData.recruitmentNumber} members
          </div>
          <div className="project-duration">
            Project Duration: {projectData.startDate} - {projectData.endDate}
          </div>
          <div className="location">Location: {projectData.location}</div>
        </div>
      </Content>
    </div>
  );
}
