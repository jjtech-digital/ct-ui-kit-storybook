import React from "react";
import InlineSvg from "@commercetools-uikit/icons/inline-svg";

export const InlineSvgs = ({ svg, color, size }) => {
  return <InlineSvg data={svg} color={color} size={size} />;
};
