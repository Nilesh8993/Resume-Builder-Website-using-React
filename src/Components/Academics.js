import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const Academics = ({ formData, setFormData }) => {
  return (
    <div className="container ">
      <Table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Form.Label>Graduation College/ University</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Mumbai University"
                value={formData.collegeName}
                onChange={(e) =>
                  setFormData({ ...formData, collegeName: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Bachelor of Engineering (B.E.)"
                value={formData.degree}
                onChange={(e) =>
                  setFormData({ ...formData, degree: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Stream</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Mechanical"
                value={formData.stream}
                onChange={(e) =>
                  setFormData({ ...formData, stream: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="month"
                value={formData.graduationStartDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    graduationStartDate: e.target.value,
                  })
                }
              />
            </td>
            <td>
              <Form.Label>Graduation Date</Form.Label>
              <Form.Control
                type="month"
                value={formData.graduationEndDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    graduationEndDate: e.target.value,
                  })
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
                label="Currently enrolled"
                checked={formData.currentlyEnrolled}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentlyEnrolled: e.target.checked,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Performance Scale</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    performanceScale: e.target.value,
                  })
                }
              >
                <option>Performance Scale</option>
                <option value="Percentage">Percentage</option>
                <option value="CGPA">CGPA</option>
              </Form.Select>
            </td>
            <td>
              <Form.Label>Performance </Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. 75%"
                value={formData.performance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    performance: e.target.value,
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

export default Academics;
