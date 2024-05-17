import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "./deviceFilter.css"

function DeviceFilter({ deviceState, featureState, onDeviceChange, onFeatureChange }) {
  const handleDeviceChange = (e) => {
    const { id, checked } = e.target;
    onDeviceChange({ ...deviceState, [id]: checked });
  };

  const handleFeatureChange = (e) => {
    const { id, checked } = e.target;
    onFeatureChange({ ...featureState, [id]: checked });
  };

  return (
    <div className="position_box">
      <Container>
        {/* Box 1: Device Checkboxes */}
        <div>
          <h5>Devices</h5>
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
          <h5>Filter options</h5>
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
