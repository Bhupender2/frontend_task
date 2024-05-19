import "./App.css";
import DeviceFilter from "./components/devicefilteroptions/DeviceFilter";
import Information from "./components/information/Information";
import SidebarMenu from "./components/sidebar/SideBar";
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import CountryTable from "./CountryTable";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const initialRow = {
  country: "",
  language: "",
  cpi: "",
  loi: "",
  ir: "",
  completes: "",
};

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    workOrderNo: "",
    projectType: "",
    category: "",
    client: "",
    clientContact: "",
    salesPerson: "",
    projectManager: "",
    projectDescription: "",
    devices: {
      mobile: false,
      tablet: false,
      desktop: false,
    },
    features: {
      gatesurvey: false,
      fraudDetection: false,
    },
  });

  const navigate = useNavigate();

  const handleAddCountry = (country) => {
    if (!selectedCountries.some((c) => c.country === country)) {
      setSelectedCountries([...selectedCountries, { ...initialRow, country }]);
    }
  };

  const handleRemoveCountry = (index) => {
    setSelectedCountries(selectedCountries.filter((_, i) => i !== index));
  };

  const handleCloneCountry = (index) => {
    const clonedCountry = { ...selectedCountries[index] };
    setSelectedCountries([
      ...selectedCountries.slice(0, index + 1),
      clonedCountry,
      ...selectedCountries.slice(index + 1),
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...selectedCountries];
    newRows[index][field] = value;
    setSelectedCountries(newRows);
  };

  const handleFormChange = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleDeviceChange = (devices) => {
    setFormData((prevData) => ({ ...prevData, devices }));
  };

  const handleFeatureChange = (features) => {
    setFormData((prevData) => ({ ...prevData, features }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      countries: selectedCountries,
    };
    console.log("Form Data Submitted:", JSON.stringify(combinedData, null, 2));
  };

  const handleShowContent = () => {
    setShowContent(true);
  };
  const handleClick = () => {
    setShowContent(false);
  };

  return (
    <>
      <div className="position_layout">
        <SidebarMenu onShowContent={handleShowContent} />
        {showContent && (
          <div>
            <button className="backbutton_styling" onClick={handleClick}>
              {" "}
              <IoArrowBack /> Back
            </button>
            <div style={{ display: "flex" }}>
              <Information
                formData={formData}
                onFormChange={handleFormChange}
              />
              <DeviceFilter
                deviceState={formData.devices}
                featureState={formData.features}
                onDeviceChange={handleDeviceChange}
                onFeatureChange={handleFeatureChange}
              />
            </div>
            <Container>
              <Row className="my-4">
                <Col>
                  <CountryDropdown onAddCountry={handleAddCountry} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CountryTable
                    countries={selectedCountries}
                    onRemoveCountry={handleRemoveCountry}
                    onCloneCountry={handleCloneCountry}
                    onInputChange={handleInputChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
