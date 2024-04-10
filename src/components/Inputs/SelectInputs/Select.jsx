import React from "react";
import { SelectInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const Select = ({
  id,
  name,
  value,
  isAutofocussed,
  isDisabled,
  isReadOnly,
  isMulti,
  options,
  onBlurHandler,
  onFocusHandler,
  onChange,
  onInputChange,
}) => {
  return (
    <IntlProvider locale="en">
      <SelectInput
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        options={options}
        isAutofocussed={isAutofocussed}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isMulti={isMulti}
        onInputChange={onInputChange}
      />
    </IntlProvider>
  );
};
