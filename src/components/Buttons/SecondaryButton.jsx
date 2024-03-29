import React from "react";
import { SecondaryButton } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const SecondaryBtn = ({ icon, label, isDisabled }) => {
  return (
    <SecondaryButton
      iconLeft={icon}
      label={label}
      onClick={() => alert("Button clicked")}
      isDisabled={isDisabled}
    />
  );
};
