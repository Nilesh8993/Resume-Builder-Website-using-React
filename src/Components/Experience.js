import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const Experience = ({ formData, setFormData }) => {
  return (
    <div className="container ">
      <Table>
        <tbody>
          <tr>
            <td>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Web Developer"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Microsoft"
                value={formData.employer}
                onChange={(e) =>
                  setFormData({ ...formData, employer: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Job Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Mumbai"
                value={formData.jobLocation}
                onChange={(e) =>
                  setFormData({ ...formData, jobLocation: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. India"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="month"
                value={formData.jobstartDate}
                onChange={(e) =>
                  setFormData({ ...formData, jobstartDate: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="month"
                value={formData.jobendDate}
                onChange={(e) =>
                  setFormData({ ...formData, jobendDate: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Form.Check
                type="checkbox"
                id="checkbox"
                label="I currently work here"
                checked={formData.currentlyWorkingHere}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentlyWorkingHere: e.target.checked,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type here..."
                style={{ height: "100px" }}
                value={formData.jobDescription}
                onChange={(e) =>
                  setFormData({ ...formData, jobDescription: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Experience;
