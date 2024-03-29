import React from "react";
import { ContentNotification } from "@commercetools-uikit/notifications";

const NotificationCt = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ContentNotification type="success">
        This is an success message{" "}
      </ContentNotification>
      <ContentNotification type="info">
        This is an info message
      </ContentNotification>
      <ContentNotification type="warning">
        {" "}
        This is an warning message{" "}
      </ContentNotification>
      <ContentNotification type="error">
        {" "}
        This is an error message{" "}
      </ContentNotification>
    </div>
  );
};

export default NotificationCt;
