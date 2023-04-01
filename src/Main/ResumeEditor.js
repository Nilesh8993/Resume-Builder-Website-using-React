import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResumeEditor = ({ page, setPage, FormTitles, PageDisplay }) => {
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
              // disabled={page === FormTitles.length - 1}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("Download the resume from download button");
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
