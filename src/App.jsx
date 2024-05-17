import "./App.css";
import DeviceFilter from "./components/devicefilteroptions/DeviceFilter";
import Information from "./components/information/Information";
import SidebarMenu from "./components/sidebar/SideBar";
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import CountryTable from "./CountryTable";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleAddCountry = (country) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleRemoveCountry = (country) => {
    setSelectedCountries(selectedCountries.filter((c) => c !== country));
  };

  return (
    <>
      <div className="position_layout">
        <SidebarMenu />

        <div>
          <div style={{ display: "flex" }}>
            <Information />
            <DeviceFilter />
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
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
