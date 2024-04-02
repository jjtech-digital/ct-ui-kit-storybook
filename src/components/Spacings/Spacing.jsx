import React from "react";
import SpacingsInline from "@commercetools-uikit/spacings-inline";
import { FlatButton } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";
const SpacingCt = () => {
  return (
    <IntlProvider locale="en">
      <SpacingsInline scale="m">
        <FlatButton /> <FlatButton /> <FlatButton />
      </SpacingsInline>
    </IntlProvider>
  );
};

export default SpacingCt;
