import React from "react";
import { ToggleInput } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const Toggle = ({ size, isChecked, isDisabled, onChangeHandler }) => {
  return (
    <ToggleInput
      isDisabled={isDisabled}
      isChecked={isChecked}
      onChange={onChangeHandler}
      size={size}
    />
  );
};
