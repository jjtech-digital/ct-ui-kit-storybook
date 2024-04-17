import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const TableWithButton = ({
  rows,
  cols,
  initialPageSize,
  ColVisibleObj,
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={cols}
      initialState={{
        columns: { columnVisibilityModel: ColVisibleObj },
        pagination: { paginationModel: { pageSize: initialPageSize } },
      }}
    />
  );
};
