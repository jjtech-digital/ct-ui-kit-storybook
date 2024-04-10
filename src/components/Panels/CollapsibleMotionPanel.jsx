import React from "react";
import { CollapsibleMotion } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const CollapsibleMotionPanel = ({
  isClosed,
  children,
  onToggle,
  minHeight,
  isDefaultClosed,
}) => {
  return (
    <CollapsibleMotion
      isClosed={isClosed}
      onToggle={onToggle}
      minHeight={minHeight}
      isDefaultClosed={isDefaultClosed}
    >
      {children}
    </CollapsibleMotion>
  );
};
