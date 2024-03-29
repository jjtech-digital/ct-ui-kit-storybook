import { PlusBoldIcon } from "@commercetools-frontend/ui-kit";
import { Dropdownn } from "./Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdownn,
};

export const PrimaryActionDropdown = {
  args: {
    icon: <PlusBoldIcon />,
    isDisabled: false,
  },
};
