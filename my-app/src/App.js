// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Loginpic from "./routes/Loginpic";
import Makepost from "./routes/Makepost";

import ProfilePage from "./routes/ProfilePage";
import PostsList from "./routes/PostsList";
import Portfolio from "./routes/Portfolio";
import ApplicationList from "./routes/ApplicatonList";
import AccountInformation from "./routes/AccountInformation";

import ProjectDescription from "./routes/ProjectDescription";
import TeamEvaluation from "./routes/TeamEvaluation";
import TeamMemberEvaluation from "./routes/TeamMemberEvaluation";

const projectId = 1;

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};

const App = () => {
  const projectId = 1;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signup" element={
          <PrivateRoute>
            <SignUp />
        </PrivateRoute>
        } /> */}
        <Route path="/makepost" element={<Makepost />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/applicationList" element={<ApplicationList />} />
        <Route path="/accountInformation" element={<AccountInformation />} />

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
