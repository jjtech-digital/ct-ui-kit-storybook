import FieldLabelCt from "./FieldLabel";
import { WarningIcon } from "@commercetools-uikit/icons";

export default {
  title: "Example/FieldLabel",
};

export const FieldLabel = () => {
  return (
    <FieldLabelCt
      title={"Sort Order"}
      hasRequiredIndicator={true}
      onInfoButtonClick={() => {}}
      hint={"Enter a number between 0 and 1"}
      hintIcon={<WarningIcon />}
      description={"This order will be used to sort the categories."}
      horizontalConstraint={7}
    />
  );
};
