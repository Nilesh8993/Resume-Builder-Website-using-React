import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";

const Skills = ({ formData, setFormData }) => {
  // const [inputSkill, setInputSkill] = useState("");

  // const onChangeHandler = (e) => {
  //   setInputSkill(e.target.value);
  // };

  // const addSkill = () => {
  //   if (inputSkill) {
  //     setFormData({ ...formData, skills: inputSkill });
  //     // setInputSkill("");
  //   }
  // };

  // const deleteSkill = () => {
  //   setInputSkill("");
  // };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Skills</th>
            {/* <th>How would you rate yourself on this skill?</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={formData.skill1}
                onChange={(e) =>
                  setFormData({ ...formData, skill1: e.target.value })
                }
              />
            </td>

            {/* <td>
              <Form.Select aria-label="Default select example">
                <option>--Options--</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </Form.Select>
            </td> */}
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={formData.skill2}
                onChange={(e) =>
                  setFormData({ ...formData, skill2: e.target.value })
                }
              />
            </td>
            {/* <td>
              <Form.Select aria-label="Default select example">
                <option>--Options--</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </Form.Select>
            </td> */}
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={formData.skill3}
                onChange={(e) =>
                  setFormData({ ...formData, skill3: e.target.value })
                }
              />
            </td>
            {/* <td>
              <Form.Select aria-label="Default select example">
                <option>--Options--</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </Form.Select>
            </td> */}
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={formData.skill4}
                onChange={(e) =>
                  setFormData({ ...formData, skill4: e.target.value })
                }
              />
            </td>
            {/* <td>
              <Form.Select aria-label="Default select example">
                <option>--Options--</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </Form.Select>
            </td> */}
          </tr>
          <tr>
            <td>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={formData.skill5}
                onChange={(e) =>
                  setFormData({ ...formData, skill5: e.target.value })
                }
              />
            </td>
            {/* <td>
              <Form.Select aria-label="Default select example">
                <option>--Options--</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </Form.Select>
            </td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Skills;
