import React from "react";
import DateInput from "@commercetools-uikit/date-input";
import { IntlProvider } from "react-intl";

const DateInputCt = ({ placeholder, value, onChange }) => {
  return (
    <IntlProvider locale="en">
      <DateInput placeholder={placeholder} value={value} onChange={onChange} />
    </IntlProvider>
  );
};

export default DateInputCt;
