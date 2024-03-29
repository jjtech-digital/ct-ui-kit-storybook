import React from "react";
import ViewSwitcher from "@commercetools-uikit/view-switcher";

export const ViewwSwitcher = () => {
  return (
    <ViewSwitcher.Group
      defaultSelected="button 2"
      onChange={(value) => console.log(value)}
    >
      <ViewSwitcher.Button isDisabled value="button 1">
        View 1
      </ViewSwitcher.Button>
      <ViewSwitcher.Button value="button 2">View 2</ViewSwitcher.Button>
      <ViewSwitcher.Button value="button 3">View 3</ViewSwitcher.Button>
      <ViewSwitcher.Button value="button 4">View 4</ViewSwitcher.Button>
    </ViewSwitcher.Group>
  );
};


