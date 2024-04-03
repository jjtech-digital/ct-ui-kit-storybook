import React from "react";
import FieldWarnings from "@commercetools-uikit/field-warnings";
import { IntlProvider } from "react-intl";
const FieldWarningCt = ({ warnings }) => {
  return (
    <IntlProvider locale="en">
      <FieldWarnings
        warnings={warnings}
        isVisible={true}
        renderWarning={(key) => {
          switch (key) {
            case "customWarning":
              return "The current password is weak, You may want to use a stronger password";
            default:
              return null;
          }
        }}
        renderDefaultWarning={(key) => {
          switch (key) {
            case "defaultWarning":
              return "Always use a strong password";
            default:
              return null;
          }
        }}
      />
    </IntlProvider>
  );
};

export default FieldWarningCt;
