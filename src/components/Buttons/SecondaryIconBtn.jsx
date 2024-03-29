import React from "react";
import { SecondaryIconButton } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const SecondaryIconBtn = ({ icon, label }) => {
  return (
    <SecondaryIconButton
      icon={icon}
      label={label}
      onClick={() => alert("Button clicked")}
    />
  );
};
