import React from "react";
import { RadioInput } from "@commercetools-frontend/ui-kit";

export const RadioInputGrp = ({
  selectedValue,
  name,
  onChangeHandler,
  onBlueHandler,
  onFocusHandler,
  isDisabled,
  isReadOnly,
  children,
  direction,
}) => {
  return (
    <RadioInput.Group
      onChange={onChangeHandler}
      name={name}
      value={selectedValue}
      onBlur={onBlueHandler}
      onFocus={onFocusHandler}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      direction={direction}
    >
      {children}
    </RadioInput.Group>
  );
};
