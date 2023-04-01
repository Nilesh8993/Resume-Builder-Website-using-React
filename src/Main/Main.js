import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactToPrint from "react-to-print";

import Academics from "../Components/Academics";
import Experience from "../Components/Experience";
import BasicInfo from "../Components/BasicInfo";
import ProjectDetails from "../Components/ProjectDetails";
import Skills from "../Components/Skills";
import OtherDetails from "../Components/OtherDetails";
import ResumeTemplate from "./ResumeTemplate";
import Achivements from "../Components/Achivements";
import ResumeEditor from "./ResumeEditor";

const Main = () => {
  const resumeRef = useRef();

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",

    jobTitle: "",
    employer: "",
    jobLocation: "",
    country: "",
    jobstartDate: "",
    jobendDate: "",
    currentlyWorkingHere: "",
    jobDescription: "",

    collegeName: "",
    degree: "",
    stream: "",
    graduationStartDate: "",
    graduationEndDate: "",
    currentlyEnrolled: "",
    performanceScale: "",
    performance: "",

    projectTitle: "",
    projectLink: "",
    projectClient: "",
    projectStatus: "",
    ProjectDescription: "",

    achievement1: "",
    achievement2: "",
    achievement3: "",
    achievement4: "",
    achievement5: "",

    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",

    resumeHeadline: "",
    blogLink: "",
    linkedin: "",
    gitHub: "",
    workSampleLink: "",
  });

  const FormTitles = [
    "Basic Information",
    "Work Experience",
    "Educational Details",
    "Project Details",
    "Achievements",
    "Skills",
    "Summary",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Academics formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <ProjectDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Achivements formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Skills formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherDetails formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end">
        <ReactToPrint
          trigger={() => (
            <button className="btn btn-primary  me-5 mb-2 ">
              Download <i class="fa-solid fa-angle-down"></i>
            </button>
          )}
          content={() => resumeRef.current}
        />
      </div>
      <div className="d-flex justify-content-center  gap-5 align-item-center">
        <ResumeEditor
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
        />

        <ResumeTemplate ref={resumeRef} formData={formData} />
      </div>
    </>
  );
};

export default Main;
