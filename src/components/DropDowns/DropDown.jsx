import React from "react";
import PrimaryActionDropdown, {
  Option,
} from "@commercetools-uikit/primary-action-dropdown";
import { PlusBoldIcon } from "@commercetools-uikit/icons";

const DropDownCt = () => {
  return (
    <PrimaryActionDropdown>
      <Option iconLeft={<PlusBoldIcon />} onClick={() => {}}>
        Primary option
      </Option>
      <Option onClick={() => {}}>Another option</Option>
      <Option isDisabled={true} onClick={() => {}}>
        Even another option
      </Option>
    </PrimaryActionDropdown>
  );
};

export default DropDownCt;
