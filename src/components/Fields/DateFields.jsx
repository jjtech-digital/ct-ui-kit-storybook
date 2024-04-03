import React from "react";
import DateField from "@commercetools-uikit/date-field";
import { IntlProvider } from "react-intl";
const DateFieldsCt = ({ title, description, value, onChange }) => {
  return (
    <IntlProvider locale="en">
      <DateField
        title={title}
        description={description}
        value={value}
        onChange={onChange}
      />
    </IntlProvider>
  );
};

export default DateFieldsCt;
