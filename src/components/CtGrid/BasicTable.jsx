import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const BasicTable = ({ rows, cols }) => {
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
      hideFooterPagination
      checkboxSelection
    />
  );
};
