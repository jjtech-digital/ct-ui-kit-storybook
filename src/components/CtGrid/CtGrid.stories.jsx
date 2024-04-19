import React from "react";
import { BasicTable } from "./BasicTable";
import { TableWithButton } from "./TableWithButton";
import { TableWithPagination } from "./TableWithPagination";
import { users, customers } from "./data.js";
import { TableWithInput } from "./TableWithInput";
import { TableWithInputAndButton } from "./TableWithInputAndButton";

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
  return <BasicTable rows={customers} cols={columns} />;
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
            key={id}
            style={{
              border: "none",
              padding: "8px 10px",
              color: "white",
              background: "#101050",
              outline: "none",
              cursor: "pointer",
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

const editusercolumns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "FirstName", width: 150 },
  { field: "lastName", headerName: "LastName", width: 150 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "city", headerName: "City", width: 150 },
  { field: "department", headerName: "Department", editable: true },
];

const updatedusers = users.map((person) => {
  return { ...person, department: "" };
});

export const WithInput = () => {
  return (
    <TableWithInput
      rows={updatedusers}
      cols={editusercolumns}
      ColVisibleObj={{}}
      initialPageSize={5}
    />
  );
};

export const WithInputAndButton = () => {
  const [newUpdatedData, setNewUpdatedData] = React.useState(updatedusers);

  const cols = [
    ...editusercolumns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      renderCell: (params) => (
        <button
          key={params.id}
          style={{
            border: "none",
            padding: "8px 10px",
            color: "white",
            background: "#101050",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={handleDeleteClick(params.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const handleDeleteClick = (id) => () => {
    setNewUpdatedData(newUpdatedData.filter((row) => row.id !== id));
  };

  return (
    <TableWithInputAndButton
      rows={newUpdatedData}
      cols={cols}
      ColVisibleObj={{}}
      initialPageSize={5}
    />
  );
};
