import React from "react";
import { SearchSelectInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const SearchSelect = ({
  id,
  name,
  isAutofocussed,
  isDisabled,
  isReadOnly,
  isMulti,
  loadOptions,
  value,
}) => {
  return (
    <IntlProvider locale="en">
      <SearchSelectInput
        id={id}
        name={name}
        value={value}
        horizontalConstraint={7}
        isAutofocussed={isAutofocussed}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isMulti={isMulti}
        placeholder="Select.."
        loadOptions={loadOptions}
      />
    </IntlProvider>
  );
};
