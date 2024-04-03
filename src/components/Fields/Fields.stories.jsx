import { useState } from "react";
import DateFieldsCt from "./DateFields";
import DateRangeFieldCt from "./DateRangeField";
import DateTimeFieldCt from "./DateTimeField";
import LocalizedMultilineTextFieldCt from "./LocalizedMultilineTextField";
import LocalizedTextFieldCt from "./LocalizedTextField";
import MoneyFieldCt from "./MoneyField";

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
export const MoneyField = () => {
  const [currency, setCurrency] = useState({
    amount: "20",
    currencyCode: "EUR",
  });
  const handleChange = (event) => {
    console.log(event);
    const { id, name, value } = event.target;
    if (id.endsWith(".amount")) {
      setCurrency((prevState) => ({
        ...prevState,
        amount: value,
      }));
    }

    if (id.endsWith(".currencyCode")) {
      setCurrency((prevState) => ({
        ...prevState,
        currencyCode: value,
      }));
    }
  };
  return (
    <div style={{ width: "40%" }}>
      <MoneyFieldCt
        title="Price"
        value={currency}
        placeholder="placeholder"
        onChange={handleChange}
        currencies={["EUR", "USD"]}
        description="How much is the fish?"
      />
    </div>
  );
};
