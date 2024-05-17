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
    <div style={{width:"80vw"}}>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select a country"
      />
    </div>
  );
}

export default CountryDropdown;