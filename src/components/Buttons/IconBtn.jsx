import React from "react";
import { IconButton } from "@commercetools-frontend/ui-kit";

export const IconBtn = ({ icon, label, shape }) => {
  return (
    <IconButton
      icon={icon}
      label={label}
      shape={shape}
      onClick={() => alert("Icon Button clicked")}
    />
  );
};
