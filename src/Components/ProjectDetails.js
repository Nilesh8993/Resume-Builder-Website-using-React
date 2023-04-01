import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const ProjectDetails = ({ formData, setFormData }) => {
  return (
    <div className="container ">
      <Table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Project Title"
                value={formData.projectTitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectTitle: e.target.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Project Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project link"
                value={formData.projectEmployer}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectLink: e.target.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Client</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Client Name"
                value={formData.projectClient}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectClient: e.target.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Project Status</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="me-5"
                  type="radio"
                  name="projectstatus"
                  value="In progress"
                  label="In Progress"
                  onChange={(e) =>
                    setFormData({ ...formData, projectStatus: e.target.value })
                  }
                />
                <Form.Check
                  type="radio"
                  name="projectstatus"
                  value="Finished"
                  label="Finished"
                  onChange={(e) =>
                    setFormData({ ...formData, projectStatus: e.target.value })
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type here..."
                style={{ height: "100px" }}
                value={formData.ProjectDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ProjectDescription: e.target.value,
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectDetails;
