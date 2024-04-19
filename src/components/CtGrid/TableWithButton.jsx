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
      sx={{
        fontFamily: "Inter",
        "& .Mui-checked": { color: "#101050 !important" },
        "& .MuiDataGrid-row.Mui-selected": {
          backgroundColor: `rgba(211, 204, 255, 0.3)!important`,
        },
      }}
      rows={rows}
      columns={cols}
      initialState={{
        columns: { columnVisibilityModel: ColVisibleObj },
        pagination: { paginationModel: { pageSize: initialPageSize } },
      }}
      checkboxSelection
    />
  );
};
