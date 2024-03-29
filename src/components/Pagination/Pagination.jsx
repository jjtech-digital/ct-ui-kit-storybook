import React from "react";
import '@commercetools-uikit/design-system/materials/custom-properties.css';
import { Pagination } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
const PaginationCt = () => {
  const items = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return (
    <IntlProvider locale="en">
      <Pagination
        totalItems={items.length}
        page={1}
        onPageChange={() => {}}
        onPerPageChange={() => {}}
      />
    </IntlProvider>
  );
};

export default PaginationCt;
