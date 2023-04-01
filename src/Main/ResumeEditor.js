import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Academics from "../Components/Academics";
import Experience from "../Components/Experience";
import BasicInfo from "../Components/BasicInfo";
import ProjectDetails from "../Components/ProjectDetails";
import Skills from "../Components/Skills";
import OtherDetails from "../Components/OtherDetails";
import Achivements from "../Components/Achivements";

const ResumeEditor = ({ formData, setFormData, page, setPage, FormTitles }) => {
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
      <div className="d-flex justify-content-center  gap-5 align-item-center">
        <div
          className="containe border rounded p-2 shadow bg-body-tertiary rounded "
          style={{ width: "40rem" }}
        >
          <div className="text-center text-primary ">
            <h4>{FormTitles[page]}</h4>
          </div>
          <div>{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="btn btn-primary float-start ps-4 pe-4"
            >
              PREV
            </button>
            <button
              disabled={page === FormTitles.length - 1}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Profile Updated");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="btn btn-primary float-end ps-4 pe-4"
            >
              {page === FormTitles.length - 1 ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeEditor;
