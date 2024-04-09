import React from "react";
import { MoneyInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const MoneyInputt = ({
  currencies,
  onBlurHandler,
  onFocusHandler,
  isDisabled,
  isReadOnly,
  isAutofocussed,
}) => {
  const [money, setMoney] = React.useState({ amount: "", currencyCode: "" });

  React.useEffect(() => {
    console.log("parsed", MoneyInput.convertToMoneyValue(money));
  }, [money]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name.split(".")[1];
    setMoney((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <IntlProvider locale="en">
      <MoneyInput
        name="moneyip"
        value={{ amount: money.amount, currencyCode: money.currencyCode }}
        onChange={(e) => handleInputChange(e)}
        currencies={currencies}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isAutofocussed={isAutofocussed}
      />
    </IntlProvider>
  );
};
