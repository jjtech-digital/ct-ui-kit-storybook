import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const BasicTable = ({ rows, cols }) => {
  return <DataGrid rows={rows} columns={cols} hideFooterPagination />;
};
