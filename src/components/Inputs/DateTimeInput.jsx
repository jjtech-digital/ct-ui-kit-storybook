import React from "react";
import DateTimeInput from "@commercetools-uikit/date-time-input";
import { IntlProvider } from "react-intl";

const DateTimeInputCt = ({ placeholder, value, onChange, timeZone }) => {
  
  return (
    <IntlProvider locale="en">
      <DateTimeInput
        placeholder={placeholder}
        timeZone={timeZone}
        value={value}
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default DateTimeInputCt;
