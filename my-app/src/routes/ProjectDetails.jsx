import styled from 'styled-components';

import useProjectStore from '../store/useProjectStore';

const Container = styled.div`
  text-align: left;
  margin-top: 30px;
`;

export default function ProjectDetails() {
  const projectData = useProjectStore((state) => state.projectData);

  if (!projectData) {
    return null;
  }

  return <Container>{projectData.detail}</Container>;
}
