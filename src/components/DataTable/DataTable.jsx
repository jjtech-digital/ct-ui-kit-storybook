import React from "react";
import { DataTable } from "@commercetools-frontend/ui-kit";

export const DataTablee = ({
  rows,
  columns,
  footer,
  maxWidth,
  maxHeight,
  onRowClick,
  isCondensed,
  onColumnResized,
  disableSelfContainment,
  disableHeaderStickiness,
  itemRenderer,
  wrapHeaderLabels,
  verticalCellAlignment,
  horizontalCellAlignment,
  sortedBy,
  onSortChange,
  sortDirection,
}) => {
  return (
    <DataTable
      rows={rows}
      columns={columns}
      footer={footer}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      onRowClick={onRowClick}
      isCondensed={isCondensed}
      onColumnResized={onColumnResized}
      disableSelfContainment={disableSelfContainment}
      disableHeaderStickiness={disableHeaderStickiness}
      itemRenderer={itemRenderer}
      wrapHeaderLabels={wrapHeaderLabels}
      verticalCellAlignment={verticalCellAlignment}
      horizontalCellAlignment={horizontalCellAlignment}
      sortedBy={sortedBy}
      onSortChange={onSortChange}
      sortDirection={sortDirection}
    />
  );
};
