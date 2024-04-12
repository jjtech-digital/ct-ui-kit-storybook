import { Headlline } from "./Headlline";
import { Subheadline as SubHeadline } from "./Subheadline";
import { Body as BodyText } from "./Body";
import { Wrap as WrapText } from "./Wrap";
import { Detail as DetailText } from "./Detail";
import { Caption as CaptionText } from "./Caption";

export default {
  title: "Basics/Typography/Text",
};

export const Headline = () => {
  return <Headlline />;
};

export const Subheadline = () => {
  return <SubHeadline />;
};
export const Body = () => {
  return <BodyText />;
};
export const Wrap = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(225, 255, 221)",
        display: "inline-block",
        width: "200px",
      }}
    >
      <WrapText />
    </div>
  );
};
export const Detail = () => {
  return <DetailText />;
};
export const Caption = () => {
  return <CaptionText />;
};
