import React from "react";
import { IntlProvider } from "react-intl";
import LocalizedTextField from "@commercetools-uikit/localized-text-field";
const LocalizedTextFieldCt = ({
  title,
  description,
  value,
  onChange,
  selectedLanguage,
}) => {
  return (
    <IntlProvider locale="en">
      <LocalizedTextField
        title={title}
        description={description}
        value={value}
        selectedLanguage={selectedLanguage}
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default LocalizedTextFieldCt;
