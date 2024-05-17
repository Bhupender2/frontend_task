
import { Table, Button } from 'react-bootstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';

function CountryTable({ countries, onRemoveCountry }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>{country}</td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onRemoveCountry(country)}
              >
                <FaTimes />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CountryTable;
