import { Gridd } from "./Gridd";
import { Grid } from "@commercetools-frontend/ui-kit";

export default {
  title: "Example/Grid",
  component: Gridd,
};

export const GridEx = () => {
  return (
    <Gridd
      display="grid"
      gridGap="16px"
      gridAutoColumns="1fr"
      gridTemplateColumns="repeat(3, 1fr)"
      alignItems={"center"}
    >
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"1"}
      </div>
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"2"}
      </div>
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"3"}
      </div>
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"4"}
      </div>
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"5"}
      </div>
      <div
        style={{
          background: "pink",
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {"6"}
      </div>
    </Gridd>
  );
};
