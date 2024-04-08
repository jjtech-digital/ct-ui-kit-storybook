import React from "react";
import { LocalizedMultilineTextInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const LocalizedMultilineInput = ({
  value,
  onChangeHandler,
  selectedLanguage,
  onBlurHandler,
  onFocusHandler,
  isDisabled,
  isReadOnly,
  isAutofocussed,
}) => {
  return (
    <IntlProvider locale="en">
      <LocalizedMultilineTextInput
        value={value}
        onChange={onChangeHandler}
        selectedLanguage={selectedLanguage}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isAutofocussed={isAutofocussed}
      />
    </IntlProvider>
  );
};
