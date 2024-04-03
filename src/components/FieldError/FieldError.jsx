import React from "react";
import FieldErrors from "@commercetools-uikit/field-errors";
import { IntlProvider } from "react-intl";
const FieldErrorCt = ({errors}) => {
  return (
    <IntlProvider locale="en">
      <FieldErrors
        errors={errors} 
        isVisible={true}
        renderMissingError={(key) => {
          switch (key) {
            case "missing":
              return "This field is required. Provide a value.";
            default:
              return null;
          }
        }}
        renderError={(key) => {
          switch (key) {
            case "duplicate":
              return "This is already in use. It must be unique.";
            default:
              return null;
          }
        }}
        renderDefaultError={(key) => {
          switch (key) {
            case "minLength":
              return "This is too short.";
            default:
              return null;
          }
        }}
      />
    </IntlProvider>
  );
};

export default FieldErrorCt;
