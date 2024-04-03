import React from "react";
import FieldLabel from "@commercetools-uikit/field-label";

const FieldLabelCt = ({
  title,
  hasRequiredIndicator,
  onInfoButtonClick,
  hint,
  hintIcon,
  description,
  horizontalConstraint

}) => {
  return (
    <div>
      <FieldLabel
        title={title}
        hasRequiredIndicator={hasRequiredIndicator}
        onInfoButtonClick={onInfoButtonClick}
        hint={hint}
        hintIcon={hintIcon}
        description={description}
        horizontalConstraint={horizontalConstraint}
      />
    </div>
  );
};

export default FieldLabelCt;
