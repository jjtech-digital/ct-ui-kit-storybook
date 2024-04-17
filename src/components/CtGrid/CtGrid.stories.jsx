import React from "react";
import { CtGrid } from "./BasicTable";
import { TableWithButton } from "./TableWithButton";
import { TableWithPagination } from "./TableWithPagination";
import { users, customers } from "./data.js";
import { GridActionsCellItem } from "@mui/x-data-grid";

export default {
  title: "Example/CtGrid",
};

export const Basic = () => {
  const columns = [
    { field: "CompanyName", headerName: "CompanyName", width: 250 },
    { field: "City", headerName: "City", width: 150 },
    { field: "State", headerName: "State", width: 150 },
    { field: "Phone", headerName: "Phone", width: 150 },
    { field: "Fax", headerName: "Fax", width: 150 },
  ];
  return <CtGrid rows={customers} cols={columns} />;
};

export const Pagination = () => {
  const columns = [
    { field: "id", hide: true },
    { field: "firstName", headerName: "FirstName", width: 150 },
    { field: "lastName", headerName: "LastName", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "city", headerName: "City", width: 150 },
  ];
  return (
    <TableWithPagination
      rows={users}
      cols={columns}
      ColVisibleObj={{ id: false }}
      initialPageSize={5}
      pageSizeOptions={[5, 10]}
      paginationMode="client"
    />
  );
};

export const WithButton = () => {
  const [rows, setRows] = React.useState(users);

  const usercolumns = [
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "FirstName", width: 150 },
    { field: "lastName", headerName: "LastName", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "city", headerName: "City", width: 150 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <button
            style={{
              border: "none",
              padding: "8px 10px",
              color: "white",
              background: "#101050",
              outline: "none",
            }}
            onClick={handleDeleteClick(id)}
          >
            Delete
          </button>,
        ];
      },
    },
  ];

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <TableWithButton
      rows={rows}
      cols={usercolumns}
      ColVisibleObj={{}}
      initialPageSize={5}
    />
  );
};
