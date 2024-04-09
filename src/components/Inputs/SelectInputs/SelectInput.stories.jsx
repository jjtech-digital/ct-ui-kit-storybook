import React from "react";
import { AsyncCreatableSelectInputt } from "./AsyncCreatableSelectInput";
import { AsyncSelectInputt } from "./AsyncSelectInput";
import { CreatableSelect } from "./CreatableSelect";
import { options, colourOptions, colorsOptions } from "./mock-data";
import { SearchSelect } from "./SearchSelect";

export default {
  title: "Example/Inputs/SelectInputs",
};

// common code

const filterColors = (inputValue) =>
  colourOptions.map((groupedOptionsList) => {
    const filteredOptions = groupedOptionsList.options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    return {
      options: filteredOptions,
    };
  });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadOptions = (inputValue) =>
  delay(500).then(() => filterColors(inputValue));

export const AsyncCreatableSelectInput = () => {
  const [selectOptn, setSelectOptn] = React.useState("" || []);

  return (
    <AsyncCreatableSelectInputt
      value={selectOptn}
      defaultOptions={colourOptions}
      loadOptions={loadOptions}
      onChange={(event) => setSelectOptn(event.target.value)}
      onBlur={() => {}}
      onFocus={() => {}}
      onInputChange={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
      isMulti={false}
    />
  );
};

export const AsyncSelectInput = () => {
  const [selectOptn, setSelectOptn] = React.useState("" || []);
  return (
    <AsyncSelectInputt
      value={selectOptn}
      defaultOptions={colourOptions}
      loadOptions={loadOptions}
      onChange={(event) => setSelectOptn(event.target.value)}
      onBlur={() => {}}
      onFocus={() => {}}
      onInputChange={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
      isMulti={false}
    />
  );
};

export const CreatableSelectInput = () => {
  const [selectOptn, setSelectOptn] = React.useState("" || []);
  return (
    <CreatableSelect
      value={selectOptn}
      options={options}
      onChange={(event) => setSelectOptn(event.target.value)}
      onBlur={() => {}}
      onFocus={() => {}}
      onInputChange={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
      isMulti={false}
    />
  );
};

export const SearchSelectInput = () => {
  const [selectOptn, setSelectOptn] = React.useState("" || []);

  const filterColorsOptns = (inputValue) =>
    colorsOptions.filter(
      (colorOption) =>
        colorOption.label === inputValue || colorOption.id === inputValue
    );

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const loadOptions = (inputValue) =>
    delay(500).then(() => filterColorsOptns(inputValue));
  return (
    <SearchSelect
      id={"colorss"}
      name={"colorss"}
      value={selectOptn}
      loadOptions={loadOptions}
      onChange={(event) => setSelectOptn(event.target.value)}
      onBlur={() => {}}
      onFocus={() => {}}
      onInputChange={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
      isMulti={false}
    />
  );
};
