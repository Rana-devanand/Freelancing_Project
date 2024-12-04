import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Components/Home";

//  Department Staff Routes
import Department from "../Components/Department/login";
import DepartmentSignup from "../Components/Department/Signup";
import DepartmentDashboard from "../Components/Department/Dashboard";
import DepartmentApplicationReview from "../Components/Department/ApplicationReview";
import DepartmentChat from "../Components/Department/Chat";
import DepartmentCourseManagement from "../Components/Department/CourseManagement";
import DepartmentMatching from "../Components/Department/Matching";
import DepartmentRecords from "../Components/Department/Records";
import DepartmentSelectionStatus from "../Components/Department/SelectionStatus";
import DepartmentProfile from "../Components/Department/Profile";
import DepartmentCreateCourse from "../Components/Department/CreateCourse"

import TA_Applicant from "../Components/TA-applicant/Login";
import TA_ApplicantSignup from "../Components/TA-applicant/Signup";
import TA_ApplicantDashboard from "../Components/TA-applicant/Dashboard";

import TA_ApplicantApplication from "../Components/TA-applicant/Application";
import TA_ApplicantApplicationStatus from "../Components/TA-applicant/ApplicationStatus";
import TA_ApplicantOffers from "../Components/TA-applicant/Offers";
import TA_ApplicantProfile from "../Components/TA-applicant/Profile";
import TA_ApplicantApply from "../Components/TA-applicant/Ta_Apply";
import TA_ApplicantChat from "../Components/TA-applicant/chat";
import TA_ApplicantVerify from "../Components/TA-applicant/verify";
import TA_ApplicantApplicationDetails from "../Components/TA-applicant/ApplicationDetails"

import TA_Committee from "../Components/TA-Committe-member/Login";
import TA_CommitteeSignup from "../Components/TA-Committe-member/Signup";
import TA_CommitteeApplicationReview from "../Components/TA-Committe-member/ApplicationReview";
import TA_CommitteeChat from "../Components/TA-Committe-member/Chat";
import TA_CommitteeDashboard from "../Components/TA-Committe-member/Dashboard";
import TA_CommitteeDecision from "../Components/TA-Committe-member/Decision";
import TA_CommitteeNotification from "../Components/TA-Committe-member/Notification";
import TA_CommitteeProfile from "../Components/TA-Committe-member/Profile";
import TA_CommitteeRecords from "../Components/TA-Committe-member/Records";
import TA_CommitteeSelection from "../Components/TA-Committe-member/Selection";


import Instructor from "../Components/Instructor/Login";
import InstructorSignup from "../Components/Instructor/Signup"; 
import InstructorDashboard from "../Components/Instructor/Dashboard";
import InstructorChat from "../Components/Instructor/Chat";
import InstructorStudentsRecord from "../Components/Instructor/StudentsRecord";
import InstructorProfile from "../Components/Instructor/Profile"

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departmentlogin/:id" element={<Department />} />
        <Route path="/departmentsignup/:id" element={<DepartmentSignup />} />
        <Route path="/departments/dashboard" element={<DepartmentDashboard />} />
        <Route path="/departments/applicationreview" element={<DepartmentApplicationReview />} />
        <Route path="/departments/chat" element={<DepartmentChat />} />
        <Route path="/departments/coursemanagement" element={<DepartmentCourseManagement />} />
        <Route path="/departments/matching" element={<DepartmentMatching />} />
        <Route path="/departments/records" element={<DepartmentRecords />} />
        <Route path="/departments/selectionstatus" element={<DepartmentSelectionStatus />} />
        <Route path="/departments/profile" element={<DepartmentProfile />} />
        <Route path="/departments/createcourse" element={<DepartmentCreateCourse />} />
                
        <Route path="/taapplicantlogin/:id" element={<TA_Applicant />} />
        <Route path="/taapplicantsignup/:id" element={<TA_ApplicantSignup />} />
        <Route path="/taapplicants/verify/:email" element={<TA_ApplicantVerify />} />
        <Route path="/taapplicants/dashboard" element={<TA_ApplicantDashboard />} />
        <Route path="/taapplicants/apply" element={<TA_ApplicantApply />} />
        <Route path="/taapplicants/application" element={<TA_ApplicantApplication />} />
        <Route path="/taapplicants/applicationstatus" element={<TA_ApplicantApplicationStatus />} />
        <Route path="/taapplicants/offers" element={<TA_ApplicantOffers />} />
        <Route path="/taapplicants/chat" element={<TA_ApplicantChat />} />
        <Route path="/taapplicants/userProfile" element={<TA_ApplicantProfile />} />
        <Route path="/taapplicants/applicationdetails" element={<TA_ApplicantApplicationDetails />} />

        <Route path="/taapplicantmemberlogin/:id" element={<TA_Committee />} />
        <Route path="/taapplicantmembersignup/:id" element={<TA_CommitteeSignup />} />
        <Route path="/tacommittee/applicationreview" element={<TA_CommitteeApplicationReview/>} />
        <Route path="/tacommittee/chat" element={<TA_CommitteeChat />} />
        <Route path="/tacommittee/dashboard" element={<TA_CommitteeDashboard />} />
        <Route path="/tacommittee/decision" element={<TA_CommitteeDecision />} />
        <Route path="/tacommittee/notification" element={<TA_CommitteeNotification />} />
        <Route path="/tacommittee/profile" element={<TA_CommitteeProfile />} />
        <Route path="/tacommittee/records" element={<TA_CommitteeRecords />} />
        <Route path="/tacommittee/selection" element={<TA_CommitteeSelection />} />
        

        <Route path="/instructorlogin/:id" element={<Instructor />} />
        <Route path="/instructorsignup/:id" element={<InstructorSignup />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/Chat" element={<InstructorChat />} />
        <Route path="/instructor/studentsrecord" element={<InstructorStudentsRecord />} />
        <Route path="/instructor/profile" element={<InstructorProfile />} />
        
      </Routes>
    </Router>
  );
};

export default Routers;
