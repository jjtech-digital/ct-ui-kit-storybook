import React from 'react'
import { LocalizedTextInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const LocalizedTextInputt = ({value,
    onChangeHandler,
    selectedLanguage,
    onBlurHandler,
    onFocusHandler,
    isDisabled,
    isReadOnly,
    isAutofocussed,}) => {
  return (
    <IntlProvider locale="en">
      <LocalizedTextInput
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
  )
}
