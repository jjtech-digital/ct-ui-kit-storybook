import AdditionalInfoMessageCt from "./AdditionalInfoMessage";
import ErrorMessageCt from "./ErrorMessage";
import WarningMessageCt from "./WarningMessage";
export default {
  title: "Example/Messages",
  component: AdditionalInfoMessageCt,
};

export const AdditionalInfoMessage = () => <AdditionalInfoMessageCt />;
export const ErrorMessage = () => <ErrorMessageCt />;
export const WarningMessage = () => <WarningMessageCt />;
AdditionalInfoMessage.storyName = "AdditionalInfoMessage";
ErrorMessage.storyName = "ErrorMessage";
WarningMessage.storyName = "WarningMessage";
