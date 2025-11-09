import React from "react";
import { Table } from "reactstrap";

function TableReport({ data }) {
  return (
    <div className="p-3 border rounded mt-3">
      <h5>Search Results</h5>
      {data.length === 0 ? (
        <p>No data found</p>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default TableReport;
