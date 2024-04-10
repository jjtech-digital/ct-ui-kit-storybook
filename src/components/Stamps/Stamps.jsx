import React from "react";
import { Stamp } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const Stamps = ({ tone, label, isCondensed, children, icon }) => {
  return (
    <Stamp tone={tone} label={label} isCondensed={isCondensed} icon={icon}>
      {children}
    </Stamp>
  );
};
