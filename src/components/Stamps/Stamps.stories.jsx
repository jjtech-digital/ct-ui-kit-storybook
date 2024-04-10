import { Stamps } from "./Stamps";
import {
  TagMultiIcon,
  AngleLeftIcon,
  BoxIcon,
  FlagLinearIcon,
  HomeIcon,
  PagesIcon,
  Spacings,
} from "@commercetools-frontend/ui-kit";

export default {
  title: "Example/Stamps",
};

export const Stamp = () => {
  return (
    <Spacings.Stack>
      <Spacings.Inline>
        <Spacings.Stack>
          <Stamps tone={"critical"} label={"Hello"} icon={<TagMultiIcon />} />
          <Stamps tone={"warning"} label={"Hello"} icon={<AngleLeftIcon />} />
          <Stamps tone={"positive"} label={"Hello"} icon={<BoxIcon />} />
          <Stamps
            tone={"information"}
            label={"Hello"}
            icon={<FlagLinearIcon />}
          />
          <Stamps tone={"primary"} label={"Hello"} icon={<HomeIcon />} />
          <Stamps tone={"secondary"} label={"Hello"} icon={<PagesIcon />} />
        </Spacings.Stack>
        {/* tones */}
        <Spacings.Stack>
          <Stamps tone={"critical"} label={'tone ="critical"'} />
          <Stamps tone={"warning"} label={'tone ="warning"'} />
          <Stamps tone={"positive"} label={'tone ="positive"'} />
          <Stamps tone={"information"} label={'tone ="information"'} />
          <Stamps tone={"primary"} label={'tone ="primary"'} />
          <Stamps tone={"secondary"} label={'tone ="secondary"'} />
        </Spacings.Stack>
      </Spacings.Inline>
    </Spacings.Stack>
  );
};
