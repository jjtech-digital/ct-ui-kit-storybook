import React from "react";
import { AsyncCreatableSelectInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const AsyncCreatableSelectInputt = ({
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
  defaultOptions,
  loadOptions,
}) => {
  return (
    <IntlProvider locale="en">
      <AsyncCreatableSelectInput
        name="async-creatable-search"
        value={value}
        onChange={onChange}
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
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
