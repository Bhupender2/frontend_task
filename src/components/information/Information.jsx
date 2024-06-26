import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./information.css";

function Information({ formData, onFormChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ [name]: value });
  };

  return (
    <Container className="sizing">
      <div className="section_heading_background">
        <h2 className=" upperCase">Project Information</h2>
      </div>
      <Form className="form_sizing">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formWorkOrderNo">
              <Form.Label>Work Order No.#</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter work order number"
                name="workOrderNo"
                value={formData.workOrderNo}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formProjectType">
              <Form.Label>Project Type</Form.Label>
              <Form.Control
                as="select"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formClient">
              <Form.Label>Client</Form.Label>
              <Form.Control
                as="select"
                name="client"
                value={formData.client}
                onChange={handleChange}
                required
              >
                <option value="">Select a person</option>
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
                <option value="client3">Client 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formClientContact">
              <Form.Label>Client's Contact</Form.Label>
              <Form.Control
                as="select"
                name="clientContact"
                value={formData.clientContact}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="contact1">Contact 1</option>
                <option value="contact2">Contact 2</option>
                <option value="contact3">Contact 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formSalesPerson">
              <Form.Label>Sales Person</Form.Label>
              <Form.Control
                as="select"
                name="salesPerson"
                value={formData.salesPerson}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="sales1">Sales Person 1</option>
                <option value="sales2">Sales Person 2</option>
                <option value="sales3">Sales Person 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formProjectManager">
              <Form.Label>Project Manager</Form.Label>
              <Form.Control
                as="select"
                name="projectManager"
                value={formData.projectManager}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="manager1">Manager 1</option>
                <option value="manager2">Manager 2</option>
                <option value="manager3">Manager 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formProjectDescription">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Information;
