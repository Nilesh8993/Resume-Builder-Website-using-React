import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="container ">
      <Table>
        <tbody>
          <tr>
            <td>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Ravi"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Kumar"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Gender</Form.Label>
              <div className="d-flex">
                <Form.Check
                  className="me-3"
                  type="radio"
                  name="gender"
                  value="Male"
                  label="Male"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <Form.Check
                  className="me-3"
                  type="radio"
                  name="gender"
                  value="Female"
                  label="Female"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <Form.Check
                  className=""
                  type="radio"
                  name="gender"
                  value="Other"
                  label="Other"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="E.g. abc@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. 9009009099"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Address here"
                style={{ height: "90px" }}
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. 101010"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </td>
            <td>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. Mumbai"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BasicInfo;
