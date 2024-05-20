import React from "react";
import Select from "react-select";

const options = [
  { value: "India", label: "India" },
  { value: "Brazil", label: "Brazil" },
  { value: "China", label: "China" },
];

function CountryDropdown({ onAddCountry }) {
  const handleChange = (selectedOption) => {
    onAddCountry(selectedOption.value);
  };

  return (
    <div style={{ width: "80vw", border:"1px solid #b4b4b8",backgroundColor: "white" }}>
      <h2 className="upperCase">regions</h2>
      <div
        style={{
          backgroundColor: "#dddddd",
          border: "2px solid #b4b4b8",
          padding: "10px 10px",
        }}
      >
        Country
        <Select
          options={options}
          onChange={handleChange}
          placeholder="Select a country"
        />
      </div>
    </div>
  );
}

export default CountryDropdown;
