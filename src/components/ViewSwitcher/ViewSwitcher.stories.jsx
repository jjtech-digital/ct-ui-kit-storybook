import ViewSwitcherCt from "./ViewSwitcher";
import { WorldIcon } from "@commercetools-uikit/icons";

export default {
  title: "Example/ViewSwitcher",
};

export const ViewSwitcherWithicons = () => (
  <ViewSwitcherCt iconsOnly={false} buttonsCount={4}>
    <WorldIcon />
  </ViewSwitcherCt>
);
ViewSwitcherWithicons.storyName = "View Switcher (With icons)";

export const ViewSwitcherWithouticons = () => (
  <ViewSwitcherCt iconsOnly={true} buttonsCount={4}>
    <WorldIcon />
  </ViewSwitcherCt>
);
ViewSwitcherWithouticons.storyName = "View Switcher (Without icons)";
