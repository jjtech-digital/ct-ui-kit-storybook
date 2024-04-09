import { useState } from "react";
import InputCt from "./Input";
import DateInputCt from "./DateInput";
import DateRangeInputCt from "./DateRangeInput";
import DateTimeInputCt from "./DateTimeInput";
import LocalizedRichTextInputCt from "./LocalizedRichTextInput";
import PasswordInputCt from "./PasswordInput";
import NumberInputCt from "./NumberInput";
import MultilineTextInputCt from "./MultilineTextInput";
import { RadioInputGrp } from "./RadioInputGroup";
import SearchTextInputCt from "./SearchTextInput";
import { LocalizedMoneyInputt } from "./LocalizedMoneyInput";
import { LocalizedMultilineInput } from "./LocalizedMultilineInput";
import { LocalizedTextInputt } from "./LocalizedTextInput";

import { RadioInput, Spacings } from "@commercetools-frontend/ui-kit";
import { RichText } from "./RichTextInput";
import { TextInputt } from "./TextInput";
import { TimeInputt } from "./TimeInput";
import { Toggle } from "./ToggleInput";
import { MoneyInputt } from "./MoneyInput";
import { SelectableSearch } from "./SelectableSearch";

export default {
  title: "Example/Inputs",
};
export const CheckboxInput = () => {
  const [checked, setChecked] = useState({
    checkbox1: true,
    checkbox2: false,
    errCheckbox1: true,
    errCheckbox2: false,
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "6px" }}>
        <p style={{ width: "100px" }}>Default</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <InputCt
            isChecked={checked.checkbox1}
            onChange={() =>
              setChecked((prev) => ({ ...prev, checkbox1: !prev.checkbox1 }))
            }
            label={"This is a label"}
          />
          <InputCt
            isChecked={checked.checkbox2}
            onChange={() =>
              setChecked((prev) => ({ ...prev, checkbox2: !prev.checkbox2 }))
            }
            label={"This is a label"}
          />
          <InputCt label={"This is a label"} isIndeterminate={true} />
        </div>
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <p style={{ width: "100px" }}>Disabled</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <InputCt
            isChecked={true}
            isDisabled={true}
            label={"This is a label"}
          />
          <InputCt
            isChecked={false}
            isDisabled={true}
            label={"This is a label"}
          />
          <InputCt
            isDisabled={true}
            label={"This is a label"}
            isIndeterminate={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <p style={{ width: "100px" }}>Read only</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <InputCt
            isChecked={true}
            isReadOnly={true}
            label={"This is a label"}
          />
          <InputCt
            isChecked={false}
            isReadOnly={true}
            label={"This is a label"}
          />
          <InputCt
            isReadOnly={true}
            label={"This is a label"}
            isIndeterminate={true}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <p style={{ width: "100px" }}>Error</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <InputCt
            isChecked={checked.errCheckbox1}
            onChange={() =>
              setChecked((prev) => ({
                ...prev,
                errCheckbox1: !prev.errCheckbox1,
              }))
            }
            hasError={true}
            label={"This is a label"}
          />
          <InputCt
            isChecked={checked.errCheckbox2}
            onChange={() =>
              setChecked((prev) => ({
                ...prev,
                errCheckbox2: !prev.errCheckbox2,
              }))
            }
            hasError={true}
            label={"This is a label"}
          />
          <InputCt
            hasError={true}
            label={"This is a label"}
            isIndeterminate={true}
          />
        </div>
      </div>
    </div>
  );
};

export const DateInput = () => {
  return (
    <div style={{ width: "40%" }}>
      <DateInputCt
        placeholder="Select a date..."
        value="2017-12-31"
        onChange={() => {}}
      />
    </div>
  );
};
export const DateRangeInput = () => (
  <div style={{ width: "40%" }}>
    {" "}
    <DateRangeInputCt
      placeholder="Select a date..."
      value={["2017-01-11", "2017-01-14"]}
      onChange={() => {}}
    />
  </div>
);
export const DateTimeInput = () => {
  const [timedate, setTimedate] = useState("2018-10-04T09:00:00.000Z");
  return (
    <div style={{ width: "40%" }}>
      <DateTimeInputCt
        placeholder="Select a date..."
        timeZone="Europe/Berlin"
        value={timedate}
        onChange={(event) => setTimedate(event.target.value)}
      />
    </div>
  );
};

export const LocalizedMoneyInput = () => {
  const [amount, setAmount] = useState("");
  return (
    <LocalizedMoneyInputt
      value={{
        USD: { currencyCode: "USD", amount: "12.22" },
        EUR: { currencyCode: "EUR", amount: amount },
      }}
      onChangeHandler={(event) => {
        console.log("event.target.value", event.target.value);
        setAmount(event.target.value);
      }}
      selectedCurrency={"USD"}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isDisabled={false}
      isReadOnly={false}
    />
  );
};

export const LocalizedMultilineTextInput = () => {
  const [text, setText] = useState("");
  return (
    <LocalizedMultilineInput
      value={{
        en: text,
        de: "House",
      }}
      onChangeHandler={(event) => {
        console.log("event.target.value", event.target.value);
        setText(event.target.value);
      }}
      selectedLanguage={"en"}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isDisabled={false}
      isReadOnly={false}
      isAutofocussed={true}
    />
  );
};

export const LocalizedTextInput = () => {
  const [text, setText] = useState("");
  return (
    <LocalizedTextInputt
      value={{
        en: text,
        de: "House",
      }}
      onChangeHandler={(event) => {
        console.log("event.target.value", event.target.value);
        setText(event.target.value);
      }}
      selectedLanguage={"en"}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isDisabled={false}
      isReadOnly={false}
      isAutofocussed={true}
    />
  );
};

export const LocalizedRichTextInput = () => {
  return (
    <div style={{ width: "40%" }}>
      <LocalizedRichTextInputCt />
    </div>
  );
};
export const PasswordInput = () => {
  const [password, setPassword] = useState("");
  return (
    <div style={{ width: "40%" }}>
      <PasswordInputCt
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    </div>
  );
};

export const MoneyInput = () => {
  return (
    <MoneyInputt
      currencies={["EUR", "USD", "AED", "KWD"]}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
    />
  );
};
export const NumberInput = () => {
  const [number, setnumber] = useState();
  return (
    <div style={{ width: "40%" }}>
      <NumberInputCt
        value={number}
        onChange={(event) => setnumber(event.target.value)}
      />
    </div>
  );
};
export const MultilineTextInput = () => {
  const [text, setText] = useState("");
  return (
    <div style={{ width: "40%" }}>
      <MultilineTextInputCt
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export const RadioInputGroup = () => {
  const [val, setVal] = useState("apple");
  return (
    <RadioInputGrp
      name="fruits"
      onChangeHandler={(e) => setVal(e.target.value)}
      selectedValue={val}
    >
      <RadioInput.Option
        value="apple"
        style={{ width: "22px", height: "22px" }}
      >
        <Spacings.Inline alignItems="center">
          {" "}
          <div>🍎</div> Apple{" "}
        </Spacings.Inline>
      </RadioInput.Option>
      <RadioInput.Option value="banana">
        <Spacings.Inline alignItems="center">
          {" "}
          <div>🍌</div> Banana{" "}
        </Spacings.Inline>
      </RadioInput.Option>
      <RadioInput.Option
        value="pineapple"
        additionalContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
      >
        <Spacings.Inline alignItems="center">
          {" "}
          <div>🍍</div> Pineapple{" "}
        </Spacings.Inline>
      </RadioInput.Option>
    </RadioInputGrp>
  );
};

export const RichTextInput = () => {
  return <RichText />;
};

export const SearchTextInput = () => {
  const [text, setText] = useState("");
  return (
    <div style={{ width: "40%" }}>
      <SearchTextInputCt
        value={text}
        onChange={(event) => setText(event.target.value)}
        onReset={() => setText("")}
        onSubmit={() => alert(text)}
      />
    </div>
  );
};

export const SelectableSearchInput = () => {
  const options = [
    {
      label: "Animals 1",
      options: [
        { value: "platypus", label: "Platypus" },
        { value: "goat", label: "Goat" },
        { value: "giraffe", label: "Giraffe" },
        { value: "whale", label: "Whale" },
        { value: "killer-whale", label: "Killer Whale", isDisabled: true },
        { value: "otter", label: "Otter" },
        { value: "elephant", label: "Elephant" },
        { value: "rat", label: "Rat" },
        { value: "anteater", label: "Anteater" },
        { value: "alligator", label: "Alligator" },
        { value: "dog", label: "Dog" },
        { value: "pig", label: "Pig" },
        { value: "hippopotamus", label: "Hippopotamus" },
        { value: "lion", label: "Lion" },
        { value: "monkey", label: "Monkey" },
        { value: "kangaroo", label: "Kangaroo" },
        { value: "flamingo", label: "Flamingo" },
        { value: "moose", label: "Moose" },
      ],
    },
    {
      label: "Animals 2",
      options: [
        { value: "prairie-dog", label: "Prairie Dog", isDisabled: true },
        { value: "snake", label: "Snake" },
        { value: "porcupine", label: "Porcupine" },
        { value: "stingray", label: "Stingray" },
        { value: "panther", label: "Panther" },
        { value: "lizard", label: "Lizard" },
        { value: "parrot", label: "Parrot" },
        { value: "dolphin", label: "Dolphin" },
        { value: "chicken", label: "Chicken" },
        { value: "sloth", label: "Sloth" },
        { value: "shark", label: "Shark" },
        { value: "ape", label: "Ape" },
        { value: "bear", label: "Bear" },
        { value: "cheetah", label: "Cheetah" },
        { value: "camel", label: "Camel" },
        { value: "beaver", label: "Beaver" },
        { value: "armadillo", label: "Armadillo" },
        { value: "tiger", label: "Tiger" },
      ],
    },
    {
      label: "Animals 3",
      options: [
        { value: "llama", label: "Llama" },
        { value: "seal", label: "Seal" },
        { value: "hawk", label: "Hawk" },
        { value: "wolf", label: "Wolf" },
        { value: "yak", label: "Yak" },
        { value: "rhinoceros", label: "Rhinoceros" },
        { value: "alpaca", label: "Alpaca" },
        { value: "zebra", label: "Zebra" },
        { value: "cat", label: "Cat" },
        { value: "rabbit", label: "Rabbit" },
        { value: "turtle", label: "Turtle" },
        { value: "cow", label: "Cow" },
        { value: "turkey", label: "Turkey" },
        { value: "deer", label: "Deer" },
      ],
    },
  ];
  return (
    <SelectableSearch
      options={options}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      onSubmit={(val) => alert(JSON.stringify(val))}
      onReset={() => {}}
      isAutofocussed={false}
      isDisabled={false}
      isReadOnly={false}
    />
  );
};

export const TextInput = () => {
  const [textValue, setTextValue] = useState("");
  return (
    <TextInputt
      value={textValue}
      onChangeHandler={(e) => setTextValue(e.target.value)}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isAutofocussed={false}
    />
  );
};

export const TimeInput = () => {
  const [time, setTime] = useState("");
  return (
    <TimeInputt
      value={time}
      onChangeHandler={(e) => setTime(e.target.value)}
      onBlurHandler={() => {}}
      onFocusHandler={() => {}}
      isAutofocussed={false}
    />
  );
};

export const ToggleInput = () => {
  const [on, setOn] = useState(false);
  return (
    <Toggle
      isDisabled={false}
      isChecked={on}
      onChangeHandler={() => setOn(!on)}
      size="small"
    />
  );
};
