import React from "react";
import { Tag, TagList } from "@commercetools-uikit/tag";
import '@commercetools-uikit/design-system/materials/custom-properties.css';
const TagListCt = () => {
  const examples = Array(15).fill().map((_, i) => i + " fish");

  return (
    <TagList>
      {examples.map((tag, index) => (
        <Tag key={index}> {tag}</Tag>
      ))}
    </TagList>
  );
};

export default TagListCt;
