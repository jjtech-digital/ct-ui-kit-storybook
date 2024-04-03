import React from "react";
import DateTimeField from "@commercetools-uikit/date-time-field";
import { IntlProvider } from "react-intl";
const DateTimeFieldCt = ({title,description,placeholder,timeZone,value,onChange}) => {
  return (
    <IntlProvider locale="en">
      <DateTimeField
       title={title}
       description={description}
       placeholder={placeholder}
       timeZone={timeZone}
        value={value}
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default DateTimeFieldCt;
