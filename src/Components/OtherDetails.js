import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const OtherDetails = ({ formData, setFormData }) => {
  return (
    <div className="container ">
      <Table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Form.Label>Resume Headline</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type here..."
                style={{ height: "80px" }}
                value={formData.resumeHeadline}
                onChange={(e) =>
                  setFormData({ ...formData, resumeHeadline: e.target.value })
                }
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <h6>Portfolio/ Work Samples</h6>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Blog link</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://myblog.com"
                value={formData.blogLink}
                onChange={(e) =>
                  setFormData({ ...formData, blogLink: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>LinkedIn Profile</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.linkedin.com/in/user"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>GitHub profile</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://github.com/username"
                value={formData.gitHub}
                onChange={(e) =>
                  setFormData({ ...formData, gitHub: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Other work sample link</Form.Label>
              <p className="text-secondary">
                Your work samples could be in the form of social media posts,
                presentations, documents, website etc. If you have multiple work
                samples, upload them to google drive and add the link here.
              </p>
              <Form.Control
                type="text"
                placeholder="http://myworksample.com"
                value={formData.workSampleLink}
                onChange={(e) =>
                  setFormData({ ...formData, workSampleLink: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OtherDetails;
