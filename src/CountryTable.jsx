import { Table, Button } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";

function CountryTable({
  countries,
  onRemoveCountry,
  onCloneCountry,
  onInputChange,
}) {
  const headerStyle = {
    backgroundColor: "#0b5ed7",
    color: "white",
  };
  return (
    <div>
      <h4>SPECIFICATIONS</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={headerStyle}>Sel</th>
            <th style={headerStyle}>Country</th>
            <th style={headerStyle}>Language</th>
            <th style={headerStyle}>CPI</th>
            <th style={headerStyle}>LOI</th>
            <th style={headerStyle}>IR</th>
            <th style={headerStyle}>Completes</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#DDDDDD" }}>
          {countries.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{row.country}</td>
              <td>
                <input
                  type="text"
                  value={row.language}
                  onChange={(e) =>
                    onInputChange(index, "language", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.cpi}
                  onChange={(e) => onInputChange(index, "cpi", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.loi}
                  onChange={(e) => onInputChange(index, "loi", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.ir}
                  onChange={(e) => onInputChange(index, "ir", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.completes}
                  onChange={(e) =>
                    onInputChange(index, "completes", e.target.value)
                  }
                />
              </td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  className="mr-2"
                  onClick={() => onCloneCountry(index)}
                >
                  <FaPlus />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onRemoveCountry(index)}
                >
                  <FaTimes />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CountryTable;
