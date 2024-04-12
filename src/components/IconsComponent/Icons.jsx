import React from "react";
import { Gridd } from "../Grid/Gridd";
import { iconsList } from "./icons-list";

export const IconsComponent = () => {
  return (
    <Gridd
      display="grid"
      gridGap="16px"
      gridAutoColumns="1fr"
      gridTemplateColumns="repeat(5, 1fr)"
      alignItems={"center"}
    >
      {iconsList.map((icon) => {
        return (
          <div
            key={icon.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            }}
          >
            {icon.icon}
            <p>{icon.label}</p>
          </div>
        );
      })}
    </Gridd>
  );
};
