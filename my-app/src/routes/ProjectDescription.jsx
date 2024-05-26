import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DATA from '../data.js';
import ProjectSummary from './ProjectSummary.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import useProjectStore from '../store/useProjectStore.jsx';
import PositionSelectBar from './PositionSelectBar.jsx';

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
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 50vw;
  height: 20vh;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

export default function ProjectDescription({ projectId }) {
  const {
    setSelectedProjectId,
    setProjectData,
    isModalOpen,
    openModal,
    closeModal,
    projectData,
  } = useProjectStore();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 나중에 수정할 것
  useEffect(() => {
    const projectData = DATA.find((project) => project.id === projectId);

    if (!projectData) {
      setError('Error: Project is missing.');
      setProjectData(null);
      return;
    }

    setProjectData(projectData);
    setSelectedProjectId(projectId);

    if (
      projectData.status === 'closed' &&
      projectData.isUserParticipant &&
      projectData.isEvaluationPending
    ) {
      openModal();
    }
  }, [projectId, setProjectData, setSelectedProjectId, openModal]);

  // 프로젝트 id에 해당하는 프로젝트 데이터를 가져와야 함
  // const { projectId } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await fetchProjectData(projectId);
  //     } catch (err) {
  //       setError('Error: Project is missing.');
  //     }
  //   };

  //   fetchData();
  //   setSelectedProjectId(projectId);

  // }, [projectId, fetchProjectData, setSelectedProjectId, projectData, openModal]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <p>Would you like to evaluate the team members?</p>
            <Button
              onClick={() => {
                closeModal();
                navigate('/evaluation');
              }}
            >
              Yes
            </Button>
            <Button onClick={closeModal}>Maybe later</Button>
          </Modal>
        </>
      )}
      <Header>
        <button>←</button>
        <h1>Project Description</h1>
      </Header>
      <ProjectSummary />
      <ProjectDetails />
      {projectData && <PositionSelectBar />}
    </Container>
  );
}
