import LinkCt from "./Link";

export default {
  title: "Example/Links",
};
export const Link = () => {
  return (
    <LinkCt
      isExternal={true}
      to={"https://google.com"}
      tone={"primary"}
      label={"Accessibility text"}
    />
  );
};
