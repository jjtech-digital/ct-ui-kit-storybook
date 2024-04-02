import React from "react";
import SearchTextInput from "@commercetools-uikit/search-text-input";

const SearchTextInputCt = ({ value, onChange, onReset, onSubmit }) => {
  return (
    <SearchTextInput
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onReset={onReset}
    />
  );
};

export default SearchTextInputCt;
