import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const TableWithInput = ({
  rows,
  cols,
  initialPageSize,
  ColVisibleObj,
}) => {
  const [rowsData, setRowsData] = React.useState(rows);

  const handleCellEditCommit = (params) => {
    const newRows = [...rowsData];
    const { id, field } = params;
    const rowIndex = newRows.findIndex((row) => row.id === id);
    if (rowIndex !== -1) {
      newRows[rowIndex][field] = params.value;
      setRowsData(newRows);
    }
    return rowsData;
  };

  return (
    <DataGrid
      rows={rows}
      columns={cols}
      initialState={{
        columns: { columnVisibilityModel: ColVisibleObj },
        pagination: { paginationModel: { pageSize: initialPageSize } },
      }}
      onCellKeyDown={(params) => handleCellEditCommit(params)}
    />
  );
};
