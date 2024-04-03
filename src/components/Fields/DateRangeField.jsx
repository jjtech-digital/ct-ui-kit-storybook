import React from "react";
import DateRangeField from "@commercetools-uikit/date-range-field";
import { IntlProvider } from "react-intl";
const DateRangeFieldCt = ({
  title,
  description,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <IntlProvider locale="en">
      <DateRangeField
        title={title}
        description={description}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default DateRangeFieldCt;
