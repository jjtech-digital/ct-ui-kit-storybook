import React from "react";
import { IntlProvider } from "react-intl";
import LocalizedRichTextInput from "@commercetools-uikit/localized-rich-text-input";
const LocalizedRichTextInputCt = () => {
  return (
    <IntlProvider locale="en">
      <LocalizedRichTextInput
        value={{
          en: "",
          de: "",
        }}
        onChange={(event) =>
          console.log("event.target.value", event.target.value)
        }
        selectedLanguage="en"
      />
    </IntlProvider>
  );
};

export default LocalizedRichTextInputCt;
