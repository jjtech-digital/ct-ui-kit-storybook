import TagsCt from "./Tags";
import TagListCt from "./TagList";

export default {
    title: "Example/Tags",
    component: TagsCt,
  };

export const Tags = () => <TagsCt/>
export const TagList = () => <TagListCt/>

Tags.storyName = "Tags";
TagList.storyName = "Tag List";