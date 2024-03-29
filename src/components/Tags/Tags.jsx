import React from "react";
import { Tag } from "@commercetools-uikit/tag";
const TagsCt = () => {
  return (
    <Tag
      type="normal"
      isDisabled={false}
    //   to="/project-key/products/icecream"
      onRemove={() => {}}
      horizontalConstraint="7"
    >
      Icecream
    </Tag>
  );
};

export default TagsCt;
