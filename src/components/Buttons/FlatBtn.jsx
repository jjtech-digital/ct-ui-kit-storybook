import React from "react";
import { FlatButton } from "@commercetools-frontend/ui-kit";

export const FlatBtn = ({ tone, icon, label, isDisabled }) => {
  return (
    <FlatButton
      tone={tone}
      icon={icon}
      label={label}
      onClick={() => alert("Button clicked")}
      isDisabled={isDisabled}
    />
  );
};
