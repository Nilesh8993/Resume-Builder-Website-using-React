import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const Achivements = ({ formData, setFormData }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Achiements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Achievement"
                value={formData.achievement1}
                onChange={(e) =>
                  setFormData({ ...formData, achievement1: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Achievement"
                value={formData.achievement2}
                onChange={(e) =>
                  setFormData({ ...formData, achievement2: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Achievement"
                value={formData.achievement3}
                onChange={(e) =>
                  setFormData({ ...formData, achievement3: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Achievement"
                value={formData.achievement4}
                onChange={(e) =>
                  setFormData({ ...formData, achievement4: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Achievement"
                value={formData.achievement5}
                onChange={(e) =>
                  setFormData({ ...formData, achievement5: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Achivements;
