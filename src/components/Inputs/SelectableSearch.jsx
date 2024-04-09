import React, { useState } from "react";
import { SelectableSearchInput } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const SelectableSearch = ({
  onSubmit,
  onReset,
  options,
  onBlurHandler,
  onFocusHandler,
  isDisabled,
  isAutofocussed,
  isReadOnly,
}) => {
  const [dropdownValue, setDropdownValue] = useState();
  const [textInputValue, setTextInputValue] = useState();

  const value = {
    text: textInputValue,
    option: dropdownValue,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    const fieldName = name.split(".")[1];
    if (fieldName === "textInput") {
      setTextInputValue(value);
    }
    if (fieldName === "dropdown") {
      setDropdownValue(value);
    }
  };
  return (
    <IntlProvider locale="en">
      <SelectableSearchInput
        name="select-search"
        value={value}
        onChange={(e) => handleInputChange(e)}
        onSubmit={onSubmit}
        onReset={onReset}
        options={options}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isAutofocussed={isAutofocussed}
      />
    </IntlProvider>
  );
};
