import FieldWarningCt from "./FieldWarning";

export default {
  title: "Example/FieldWarning",
};
export const FieldWarning = () => {
  return (
    <FieldWarningCt
      warnings={{
        customWarning: true,
        defaultWarning: true,
      }}
    />
  );
};
