import React from "react";
import ViewSwitcher from "@commercetools-uikit/view-switcher";

const ViewSwitcherCt = ({ buttonsCount, children, iconsOnly }) => {
  return (
    <ViewSwitcher.Group defaultSelected="button 2">
      {[...Array(buttonsCount).keys()].map((index) => {
        const i = index + 1;
        const viewSwitcherButton = `Button ${i}`;
        return (
          <ViewSwitcher.Button key={i} value={viewSwitcherButton}>
            {!iconsOnly && children} {`View ${i}`}
          </ViewSwitcher.Button>
        );
      })}
    </ViewSwitcher.Group>
  );
};
export default ViewSwitcherCt;
