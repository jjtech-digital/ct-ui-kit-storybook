import React from "react";
import Tooltip from "@commercetools-uikit/tooltip";
import { PrimaryButton } from "@commercetools-frontend/ui-kit";
import "@commercetools-uikit/design-system/materials/custom-properties.css";
const ToolTipCt = () => {
  return (
    <Tooltip
      placement="left"
      title="If you buy a pizza, you will also get a free ice cream :)"
    >
      <PrimaryButton onClick={() => {}} label="Hover to see the Tool tip" />
    </Tooltip>
  );
};

export default ToolTipCt;
