import React from "react";
import Label from "@commercetools-uikit/label";

const LabelCt = ({ tone, children, htmlFor }) => {
  return <Label tone={tone} htmlFor={htmlFor}>{children}</Label>;
};

export default LabelCt;
