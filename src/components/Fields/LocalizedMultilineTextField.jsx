import React from "react";
import { IntlProvider } from "react-intl";
import LocalizedMultilineTextField from "@commercetools-uikit/localized-multiline-text-field";
const LocalizedMultilineTextFieldCt = ({title,description, value,onChange }) => {
  return (
    <IntlProvider locale="en">
      <LocalizedMultilineTextField
        title={title}
        description={description}
        value={value}
        selectedLanguage="en"
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default LocalizedMultilineTextFieldCt;
