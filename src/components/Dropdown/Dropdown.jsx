import React from "react";
import PrimaryActionDropdown, {
  Option,
} from "@commercetools-uikit/primary-action-dropdown";

export const Dropdownn = ({ icon, isDisabled }) => {
  return (
    <PrimaryActionDropdown>
      <Option iconLeft={icon} onClick={() => {}}>
        Option 1
      </Option>
      <Option onClick={() => {}}>Option 2</Option>
      <Option isDisabled={isDisabled} onClick={() => {}}>
        Option 3
      </Option>
    </PrimaryActionDropdown>
  );
};
