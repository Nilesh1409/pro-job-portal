import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EmployerPrivateRoute from "./commons/EmployerPrivateRoute";
import PostJobPage from "./pages/employer/PostJobPage";
import AppliedJobsPage from "./pages/employee/AppliedJobsPage";
import EmployeePrivateRoute from "./commons/EmployeePrivateRoute";
import EditProfilePage from "./pages/employee/EditProfilePage";
import DashboardPage from "./pages/employer/DashboardPage";
import ApplicantsPage from "./pages/employer/ApplicantsPage";
import ApplicantsPerJobPage from "./pages/employer/ApplicantsPerJobPage";
import TextPostJob from "./pages/employer/PostJob";

const BaseRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Employer routes */}
        <Route path="/employer/*" element={<EmployerPrivateRoute />} />
        {/* <EmployerPrivateRoute  path="/post-job/" element={<PostJobPage/>} />
                <EmployerPrivateRoute  path="/employer/dashboard/" element={<DashboardPage/>} />
                <EmployerPrivateRoute  path="/employer/applicants/" element={<ApplicantsPage/>} /> */}

        {/* repalcing employerPrivateRoute with Route to fix error for now*/}

        {/* <Route  path="/post-job/" element={<PostJobPage/>} />
                <Route  path="/employer/dashboard/" element={<DashboardPage/>} />
                <Route  path="/employer/applicants/" element={<ApplicantsPage/>} /> */}

        {/* <Route path="/post-job/" element={<TextPostJob/>} /> */}
        {/* <EmployerPrivateRoute  path="/employer/applicants/:job_id" element={<ApplicantsPerJobPage/>} /> */}

        {/* Employee routes */}
        {/* <EmployeePrivateRoute  path="/edit-profile/" element={<EditProfilePage/>} />
                <EmployeePrivateRoute  path="/applied-jobs/" element={<AppliedJobsPage/>} /> */}

        <Route path="/edit-profile/" element={<EditProfilePage />} />
        <Route path="/applied-jobs/" element={<AppliedJobsPage />} />
      </Routes>
    </div>
  );
};

export default BaseRouter;
