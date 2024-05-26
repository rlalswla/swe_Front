// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Loginpic from './routes/Loginpic';
import Makepost from './routes/Makepost';
import ProjectDescription from './routes/ProjectDescription';
import TeamEvaluation from './routes/TeamEvaluation';
import TeamMemberEvaluation from './routes/TeamMemberEvaluation';

const App = () => {
  const projectId = 1;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/makepost" element={<Makepost />} />
        <Route
          path="/project-description"
          element={<ProjectDescription projectId={projectId} />}
        />
        <Route path="/evaluation" element={<TeamEvaluation />} />
        <Route
          path="/evaluation/:memberId"
          element={<TeamMemberEvaluation />}
        />
      </Routes>
    </Router>
  );
};

export default App;
