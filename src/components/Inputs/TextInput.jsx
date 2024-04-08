import React from "react";
import { TextInput } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const TextInputt = ({
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
    <TextInput
      value={value}
      className={className}
      name={name}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
      isAutofocussed={isAutofocussed}
      placeholder="Placeholder"
    />
  );
};
