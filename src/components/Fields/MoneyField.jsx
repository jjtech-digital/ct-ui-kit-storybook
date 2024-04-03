import React from "react";
import MoneyField from "@commercetools-uikit/money-field";
import { IntlProvider } from "react-intl";
const MoneyFieldCt = ({title,value,onChange,currencies,description, placeholder}) => {
  return (
    <IntlProvider locale="en">
      <MoneyField
      placeholder={placeholder}
        title={title}
        description={description}
        value={value}
        onChange={onChange}
        currencies={currencies}
      />
    </IntlProvider>
  );
};

export default MoneyFieldCt;
