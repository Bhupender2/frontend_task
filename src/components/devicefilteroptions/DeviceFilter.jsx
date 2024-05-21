import React from "react";
import { Container, Form } from "react-bootstrap";
import "./deviceFilter.css";

function DeviceFilter({
  deviceState,
  featureState,
  onDeviceChange,
  onFeatureChange,
}) {
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
        <div className="position_outerbox">
          <div className="position_secondBox">
            <div className="heading_position">
              <h5>Devices</h5>
            </div>
            <Form className="position_form_sizing">
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
            <div className="heading_position">
              <h5>Filter options</h5>
            </div>
            <Form className="position_form_sizing">
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
        </div>
      </Container>
    </div>
  );
}

export default DeviceFilter;
