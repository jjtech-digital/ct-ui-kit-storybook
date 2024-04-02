import React from "react";
import MultilineTextInput from "@commercetools-uikit/multiline-text-input";
import { IntlProvider } from "react-intl";
const MultilineTextInputCt = ({ value, onChange }) => {
  return (
    <IntlProvider locale="en">
      <MultilineTextInput value={value} onChange={onChange} />
    </IntlProvider>
  );
};

export default MultilineTextInputCt;
