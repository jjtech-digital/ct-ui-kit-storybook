import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const TableWithPagination = ({
  rows,
  cols,
  initialPageSize,
  ColVisibleObj,
  pageSizeOptions,
  paginationMode,
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={cols}
      initialState={{
        columns: { columnVisibilityModel: ColVisibleObj },
        pagination: { paginationModel: { pageSize: initialPageSize } },
      }}
      pageSizeOptions={pageSizeOptions}
      paginationMode={paginationMode}
    />
  );
};
