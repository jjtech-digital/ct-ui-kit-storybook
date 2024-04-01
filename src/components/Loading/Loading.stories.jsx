import LoadingCt from "./Loading";
export default {
  title: "Example/Loading",
};

export const LoadingSpinner = () => <LoadingCt scale="l" maxDelayDuration={3000}>Loading text</LoadingCt>;

