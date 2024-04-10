import React from "react";
import { CollapsiblePanel } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";

export const Collapsible = ({
  id,
  header,
  secondaryHeader,
  description,
  className,
  isSticky,
  headerControls,
  isDisabled,
  children,
  tone,
  theme,
  condensed,
  hideExpansionControls,
  headerControlsAlignment,
  isDefaultClosed,
  isClosed,
  onToggle,
}) => {
  return (
    <CollapsiblePanel
      isClosed={isClosed}
      onToggle={onToggle}
      header={header}
      secondaryHeader={secondaryHeader}
      description={description}
      className={className}
      isSticky={isSticky}
      headerControls={headerControls}
      isDisabled={isDisabled}
      tone={tone}
      theme={theme}
      condensed={condensed}
      hideExpansionControls={hideExpansionControls}
      headerControlsAlignment={headerControlsAlignment}
      isDefaultClosed={isDefaultClosed}
    >
      {children}
    </CollapsiblePanel>
  );
};
