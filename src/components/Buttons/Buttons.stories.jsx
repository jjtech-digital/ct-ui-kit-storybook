import { FlatBtn } from "./FlatBtn";
import { AngleDownIcon } from "@commercetools-frontend/ui-kit";
import { IconBtn } from "./IconBtn";
import { PrimaryBtn } from "./PrimaryButton";
import { SecondaryBtn } from "./SecondaryButton";
import { SecondaryIconBtn } from "./SecondaryIconBtn";

export default {
  title: "Example/Buttons",
};

export const FlatButton = () => {
  return (
    <FlatBtn
      tone={"primary"}
      icon={<AngleDownIcon />}
      label={"Accessibility text"}
      isDisabled={false}
    />
  );
};
// icon button
export const IconButton = () => {
  return <IconBtn shape={"square"} icon={<AngleDownIcon />} label={""} />;
};

// primary button
export const PrimaryButton = () => {
  return (
    <PrimaryBtn
      icon={<AngleDownIcon />}
      label={"Accessibility text"}
      isDisabled={false}
    />
  );
};

// secondary button
export const SecondaryButton = () => {
  return <SecondaryBtn icon={<AngleDownIcon />} label="Accessibility text" />;
};

// secondary icon btn
export const SecondaryIconButton = () => {
  return <SecondaryIconBtn icon={<AngleDownIcon />} label="" />;
};
