import { AdditionalInfoMessage } from "@commercetools-uikit/messages";
import { IntlProvider } from "react-intl";
const AdditionalInfoMessageCt = () => {
  return (
    <IntlProvider locale="en">
      <AdditionalInfoMessage
        message={{ id: "test", defaultMessage: "test123" }}
      >
        Something went wrong
      </AdditionalInfoMessage>
    </IntlProvider>
  );
};

export default AdditionalInfoMessageCt;
