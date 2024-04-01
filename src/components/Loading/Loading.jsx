import React from "react";
import LoadingSpinner from "@commercetools-uikit/loading-spinner";

const LoadingCt = ({scale,maxDelayDuration,children}) => {
  return <LoadingSpinner scale={scale} maxDelayDuration={maxDelayDuration}>{children}</LoadingSpinner>;
};

export default LoadingCt;
 