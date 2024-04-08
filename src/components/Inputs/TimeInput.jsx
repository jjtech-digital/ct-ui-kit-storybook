import React from "react";
import { TimeInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const TimeInputt = ({
  value,
  className,
  name,
  onChangeHandler,
  onBlurHandler,
  onFocusHandler,
  isAutofocussed,
  isDisabled = false,
  isReadOnly = false,
}) => {
  return (
    <IntlProvider locale="en">
      <TimeInput
        value={value}
        name={name}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isAutofocussed={isAutofocussed}
        placeholder="Enter time"
      />
    </IntlProvider>
  );
};
