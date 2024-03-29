import React from "react";
import { PrimaryButton } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const PrimaryBtn = ({ icon, label, isDisabled }) => {
  return (
    <PrimaryButton
      iconLeft={icon}
      label={label}
      onClick={() => alert("Primary Button clicked")}
      isDisabled={isDisabled}
      size="big"
    />
  );
};
