import React from "react";
import { LocalizedMoneyInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const LocalizedMoneyInputt = ({
  value,
  onChangeHandler,
  selectedCurrency,
  onBlurHandler,
  onFocusHandler,
  isDisabled,
  isReadOnly,
}) => {
  return (
    <IntlProvider locale="en">
      <LocalizedMoneyInput
        value={value}
        onChange={onChangeHandler}
        selectedCurrency={selectedCurrency}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
      />
    </IntlProvider>
  );
};
