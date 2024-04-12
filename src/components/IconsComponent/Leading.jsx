import React from "react";
import LeadingIcon from "@commercetools-uikit/icons/leading-icon";

export const Leading = ({ size, color, isInverted, icon, svg }) => {
  return (
    <LeadingIcon
      size={size}
      color={color}
      isInverted={isInverted}
      icon={icon}
      svg={svg}
    />
  );
};
