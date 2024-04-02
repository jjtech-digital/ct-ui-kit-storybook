import { useState } from "react";
import InputCt from "./Input";
import DateInputCt from "./DateInput";
import DateRangeInputCt from "./DateRangeInput";
import DateTimeInputCt from "./DateTimeInput";
import LocalizedRichTextInputCt from "./LocalizedRichTextInput";
import PasswordInputCt from "./PasswordInput";
import NumberInputCt from "./NumberInput";
import MultilineTextInputCt from "./MultilineTextInput";
import RadioInputCt from "./SearchTextInput";
import SearchTextInputCt from "./SearchTextInput";

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
