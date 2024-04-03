import { useState } from "react";
import DateFieldsCt from "./DateFields";
import DateRangeFieldCt from "./DateRangeField";

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
