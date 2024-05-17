import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'India', label: 'India' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'China', label: 'China' },
];

function CountryDropdown({ onAddCountry }) {
  const handleChange = (selectedOption) => {
    onAddCountry(selectedOption.value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Select a country"
    />
  );
}

export default CountryDropdown;
