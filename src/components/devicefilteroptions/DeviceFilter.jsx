import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./deviceFilter.css"

function DeviceFilter() {
  const [deviceState, setDeviceState] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  const [featureState, setFeatureState] = useState({
    gatesurvey: false,
    fraudDetection: false,
  });

  const handleDeviceChange = (e) => {
    const { id, checked } = e.target;
    setDeviceState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleFeatureChange = (e) => {
    const { id, checked } = e.target;
    setFeatureState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div className="position_box">
      <Container>
        {/* Box 1: Device Checkboxes */}
        <div>
          <h5>Device Checkboxes</h5>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Mobile"
                id="mobile"
                checked={deviceState.mobile}
                onChange={handleDeviceChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Tablet"
                id="tablet"
                checked={deviceState.tablet}
                onChange={handleDeviceChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Desktop"
                id="desktop"
                checked={deviceState.desktop}
                onChange={handleDeviceChange}
              />
            </Form.Group>
          </Form>
        </div>

        {/* Box 2: Feature Checkboxes */}
        <div className="position_secondBox">
          <h5>Feature Checkboxes</h5>
          <Form>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Gatesurvey"
                id="gatesurvey"
                checked={featureState.gatesurvey}
                onChange={handleFeatureChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Fraud Detection"
                id="fraudDetection"
                checked={featureState.fraudDetection}
                onChange={handleFeatureChange}
              />
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default DeviceFilter;
