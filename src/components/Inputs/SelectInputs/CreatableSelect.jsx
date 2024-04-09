import React from "react";
import { CreatableSelectInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const CreatableSelect = ({
  value,
  onChange,
  onBlur,
  onFocus,
  isDisabled,
  isAutofocussed,
  isReadOnly,
  isMulti,
  filterOption,
  onInputChange,
  options,
}) => {
  return (
    <IntlProvider locale="en">
      <CreatableSelectInput
        name="creatable-select"
        value={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        filterOption={filterOption}
        onInputChange={onInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isAutofocussed={isAutofocussed}
      />
    </IntlProvider>
  );
};
