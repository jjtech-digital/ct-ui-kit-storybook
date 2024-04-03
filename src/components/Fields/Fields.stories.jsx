import { useState } from "react";
import DateFieldsCt from "./DateFields";
import DateRangeFieldCt from "./DateRangeField";
import DateTimeFieldCt from "./DateTimeField";
import LocalizedMultilineTextFieldCt from "./LocalizedMultilineTextField";
import LocalizedTextFieldCt from "./LocalizedTextField";

export default {
  title: "Example/Fields",
};

export const DateField = () => {
  const [value, setvalue] = useState("2018-10-30");
  return (
    <div style={{ width: "40%" }}>
      <DateFieldsCt
        title="Release Date"
        description="Select the date of publication"
        value={value}
        onChange={(event) => setvalue(event.target.value)}
      />
    </div>
  );
};

export const DateRangeField = () => {
  const [value, setvalue] = useState([]);
  return (
    <div style={{ width: "40%" }}>
      <DateRangeFieldCt
        title="Release Date"
        description="Select the date of publication"
        placeholder="Select a date..."
        value={value}
        onChange={(event) => setvalue(event.target.value)}
      />
    </div>
  );
};
export const DateTimeField = () => {
  const [value, setvalue] = useState("");
  return (
    <div style={{ width: "40%" }}>
      <DateTimeFieldCt
        title="Release Date"
        description="Select the date of publication"
        placeholder="Select a date..."
        timeZone="Europe/Berlin"
        value={value}
        onChange={(event) => setvalue(event.target.value)}
      />
    </div>
  );
};
export const LocalizedMultilineTextField = () => {
  const [text, setText] = useState({
    en: "Parrot that knows how to party",
    de: "Papagei der ordentlich abfeiert",
  });
  const handleChange = (event) => {
    const language = event.target.language;
    const updatedText = { ...text };
    if (language === "en") {
      updatedText.en = event.target.value;
    } else if (language === "de") {
      updatedText.de = event.target.value;
    }

    setText(updatedText);
  };

  return (
    <div style={{ width: "40%" }}>
      <LocalizedMultilineTextFieldCt
        title="Description"
        description="More information about the product"
        selectedLanguage="en"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};
export const LocalizedTextField = () => {
  const [text, setText] = useState({
    en: "Parrot that knows how to party",
    de: "Papagei der ordentlich abfeiert",
  });
  const handleChange = (event) => {
    const language = event.target.language;
    const updatedText = { ...text };
    if (language === "en") {
      updatedText.en = event.target.value;
    } else if (language === "de") {
      updatedText.de = event.target.value;
    }

    setText(updatedText);
  };
  return (
    <div style={{ width: "40%" }}>
      <LocalizedTextFieldCt
        title="Description"
        value={text}
        selectedLanguage="en"
        onChange={handleChange}
      />
    </div>
  );
};
