import React, { forwardRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResumeTemplate = forwardRef((props, ref) => {
  const formData = props.formData;

  const formatDate = (date) => {
    const year = date.slice(0, 4);

    const month = date.slice(-2);

    switch (month) {
      case "01":
        return `Jan ${year}`;
      case "02":
        return `Feb ${year}`;
      case "03":
        return `Mar ${year}`;
      case "04":
        return `Apr ${year}`;
      case "05":
        return `May ${year}`;
      case "06":
        return `Jun ${year}`;
      case "07":
        return `Jul ${year}`;
      case "08":
        return `Aug ${year}`;
      case "09":
        return `Sep ${year}`;
      case "10":
        return `Oct ${year}`;
      case "11":
        return `Nov ${year}`;
      case "12":
        return `Dec ${year}`;
    }
  };
  return (
    <>
      <div ref={ref}>
        <div className="resume-container">
          <div className="header">
            <p className="heading">
              {formData.firstName + " " + formData.lastName}
            </p>
            <p className="subHeading">{formData.jobTitle}</p>

            <div className="links">
              <a className="link">
                <i className="fa-regular fa-envelope"></i>
                {formData.email}
              </a>
              <a className="link">
                <i className="fa-solid fa-phone"></i>
                {formData.phone}
              </a>
              <a className="link">
                <i className="fa-brands fa-linkedin"></i>
                {formData.linkedin}
              </a>
              <a className="link">
                <i className="fa-brands fa-github"></i>
                {formData.gitHub}
              </a>
              <a className="link">
                <i class="fa-solid fa-mars-and-venus"></i>
                {formData.gender}
              </a>
              <a className="link">{`DOB - ${formData.dob}`}</a>
              <a>
                <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                {formData.city}
              </a>
            </div>
            <hr />
          </div>
          <p className="section-title">Profile</p>
          <p className="">{formData.resumeHeadline}</p>
          <div className="main">
            <div className="col1">
              <div className="section-title">Projects</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-bold ">{formData.projectTitle}</p>
                  <p className="employer">{formData.projectLink}</p>
                  <p className="client fst-italic">{formData.projectClient}</p>
                  <p className="client">{formData.projectStatus}</p>
                  <p className="client">{formData.ProjectDescription}</p>
                </div>
              </div>
              <div className="section-title">Education</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-bold ">{formData.collegeName}</p>
                  <p className="employer">
                    {formData.degree}({formData.stream})
                  </p>
                  <p className="client fst-italic">
                    <i class="fa-solid fa-calendar-week"></i>{" "}
                    {formatDate(formData.graduationStartDate)} -
                    {formData.currentlyEnrolled
                      ? "Present"
                      : formatDate(formData.graduationEndDate)}
                  </p>
                  <p className="client">
                    {formData.performanceScale === "Percentage"
                      ? `${formData.performance} %`
                      : `${formData.performance} CGPA`}
                  </p>
                </div>
              </div>
              <div className="section-title">Skills</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-normal ">{formData.skill1}</p>
                  <p className="fw-normal ">{formData.skill2}</p>
                  <p className="fw-normal ">{formData.skill3}</p>
                  <p className="fw-normal ">{formData.skill4}</p>
                  <p className="fw-normal ">{formData.skill5}</p>
                </div>
              </div>
            </div>
            <div className="col2">
              <div className="section-title">Work Experience</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-bold ">{formData.jobTitle}</p>
                  <p className="employer fst-italic">{`M/s. ${formData.employer}`}</p>
                  <p className="client ">
                    <i class="fa-solid fa-calendar-week"></i>{" "}
                    {formatDate(formData.jobstartDate)} -{" "}
                    {formData.currentlyWorkingHere
                      ? "Present"
                      : formatDate(formData.jobendDate)}
                  </p>
                  <p className="client">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                    {formData.jobLocation} / {formData.country}
                  </p>
                  <p className="client">{formData.jobDescription}</p>
                </div>
              </div>
              <div className="section-title">Achievements</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-normal ">{formData.achievement1}</p>
                  <p className="fw-normal ">{formData.achievement2}</p>
                  <p className="fw-normal ">{formData.achievement3}</p>
                  <p className="fw-normal ">{formData.achievement4}</p>
                  <p className="fw-normal ">{formData.achievement5}</p>
                </div>
              </div>
              <div className="section-title">Other Details</div>
              <div className="section-content">
                <div className="item">
                  <p className="fw-normal ">Address:- {formData.address}</p>
                  <p className="fw-normal ">Pin code:- {formData.pincode}</p>

                  <p className="fw-normal ">{formData.blogLink}</p>
                  <p className="fw-normal ">{formData.workSampleLink}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="section-title">Declaration</p>
          <p>
            I hereby declare that the above furnished details are true best of
            my knowledge & belief.
          </p>
          <p className="fw-bold">
            {formData.firstName + " " + formData.lastName}
          </p>
        </div>
      </div>
    </>
  );
});

export default ResumeTemplate;
