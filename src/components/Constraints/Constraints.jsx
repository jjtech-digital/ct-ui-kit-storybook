import React from "react";
import { Constraints } from "@commercetools-frontend/ui-kit";

export const Constraint = ({ max, children }) => {
  return <Constraints.Horizontal max={max}>{children}</Constraints.Horizontal>;
};
