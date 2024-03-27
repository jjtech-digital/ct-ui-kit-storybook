import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const CtGrid = ({ label }) => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make", flex: 1 },
    { field: "model", flex: 1 },
    { field: "price", flex: 1 },
    { field: "electric", flex: 1 },
  ]);

  if (!rowData.length && !colDefs.length) return null;

  return (
    <>
      <h1>{label}</h1>
      <div
        className="ag-theme-quartz"
        style={{ width: "100%", height: "100vh" }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default CtGrid;
