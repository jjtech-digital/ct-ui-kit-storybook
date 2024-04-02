import React from "react";
import CheckboxInput from "@commercetools-uikit/checkbox-input";
const InputCt = ({
  value,
  onChange,
  isChecked,
  label,
  isIndeterminate = false,
  isDisabled=false,
  isReadOnly=false,
  hasError=false
}) => {
  return (
    <CheckboxInput
      value={value}
      onChange={onChange}
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      hasError={hasError}
    >
      {label}
    </CheckboxInput>
  );
};

export default InputCt;
