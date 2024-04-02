import React from "react";
import DateRangeInput from "@commercetools-uikit/date-range-input";
import { IntlProvider } from "react-intl";
const DateRangeInputCt = ({ value, placeholder, onChange }) => {
  return (
    <IntlProvider locale="en">
    <DateRangeInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    </IntlProvider>
  );
};

export default DateRangeInputCt;
